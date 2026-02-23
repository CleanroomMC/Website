import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import fg from "fast-glob";
import matter from "gray-matter";
import satori from "satori";
import { html as satoriHtml } from "satori-html";
import sharp from "sharp";
import pLimit from "p-limit";

const SIZE = { width: 1200, height: 630 };
const OUT_DIR = "docs/public/og";
const CACHE_DIR = "docs/.vitepress/plugins/data/og-satori";
const FONT_FILE = "docs/.vitepress/assets/FrexSansGB-Regular.ttf";
const FONT_FILE_SEMIBOLD = "docs/.vitepress/assets/FrexSansGB-SemiBold.ttf";
const BG_FILE = "docs/.vitepress/assets/cleanroom-og-base.png";
const SHARP_CONCURRENCY = 4;
const SATORI_CONCURRENCY = Math.max(4, os.cpus().length);
const OUTPUT_EXT = ".webp";
const OUTPUT_CODEC = "webp";
const WEBP_OPTIONS = {
  quality: 85,
  alphaQuality: 95,
  lossless: false,
  nearLossless: false,
  smartSubsample: true,
  smartDeblock: false,
  effort: 5,
  preset: "picture",
} as const;
const CACHE_VERSION = 2;

type PageMeta = {
  file: string;
  slug: string;
  title: string;
  description?: string;
  fileHash: string;
};

type OgCacheMeta = {
  version: number;
  sourcePath: string;
  sourceHash: string;
  inputSignature: string;
};

export default function SatoriOg() {
  const root = process.cwd();
  let fontData: Buffer | undefined;
  let fontData2: Buffer | undefined;
  let bgBuffer: Buffer | undefined;
  let fontHash = "";
  let fontHash2 = "";
  let bgHash = "";

  function toPosix(file: string) {
    return file.replace(/\\/g, "/");
  }

  function sha256(input: Buffer | string) {
    return crypto.createHash("sha256").update(input).digest("hex");
  }

  function getOutPath(slug: string) {
    return path.resolve(root, OUT_DIR, slug || "index") + OUTPUT_EXT;
  }

  function getCachePath(slug: string) {
    return path.resolve(root, CACHE_DIR, slug || "index") + ".json";
  }

  async function createCacheMeta(meta: PageMeta): Promise<OgCacheMeta> {
    await Promise.all([ensureFont(), ensureBgBuffer()]);
    const outputPath = path.join(OUT_DIR, (meta.slug || "index") + OUTPUT_EXT);

    const payload = [
      `version:${CACHE_VERSION}`,
      `source.path:${toPosix(meta.file)}`,
      `source.hash:${meta.fileHash}`,
      `asset.bg.path:${toPosix(BG_FILE)}`,
      `asset.bg.hash:${bgHash}`,
      `asset.font.path:${toPosix(FONT_FILE)}`,
      `asset.font.hash:${fontHash}`,
      `asset.fontSemibold.path:${toPosix(FONT_FILE_SEMIBOLD)}`,
      `asset.fontSemibold.hash:${fontHash2}`,
      `output.path:${toPosix(outputPath)}`,
      `output.codec:${OUTPUT_CODEC}`,
      `output.webp:${JSON.stringify(WEBP_OPTIONS)}`,
      `render.pipeline:sharp-composite`,
      `size:${SIZE.width}x${SIZE.height}`,
    ].join("\n");

    return {
      version: CACHE_VERSION,
      sourcePath: toPosix(meta.file),
      sourceHash: meta.fileHash,
      inputSignature: sha256(payload),
    };
  }

  async function writeCacheMeta(meta: PageMeta) {
    const cachePath = getCachePath(meta.slug);
    const cacheMeta = await createCacheMeta(meta);
    await fs.mkdir(path.dirname(cachePath), { recursive: true });
    await fs.writeFile(cachePath, JSON.stringify(cacheMeta));
  }

  async function ensureFont() {
    if (!fontData) {
      const fontPath = path.resolve(root, FONT_FILE);
      const buf = await fs.readFile(fontPath);
      fontData = buf;
      fontHash = sha256(buf);
    }
    if (!fontData2) {
      const fontPath = path.resolve(root, FONT_FILE_SEMIBOLD);
      const buf = await fs.readFile(fontPath);
      fontData2 = buf;
      fontHash2 = sha256(buf);
    }
    return [fontData!, fontData2!];
  }

  async function ensureBgBuffer() {
    if (!bgBuffer) {
      const bgPath = path.resolve(root, BG_FILE);
      const buf = await fs.readFile(bgPath);
      bgBuffer = buf;
      bgHash = sha256(buf);
    }
    return bgBuffer!;
  }

  async function* iteratePages(): AsyncGenerator<PageMeta> {
    const stream = fg.stream(
      ["docs/**/*.md", "!docs/.vitepress/**", "!docs/**/index.md"],
      { cwd: root },
    ) as AsyncIterable<string>;
    for await (const file of stream) {
      const abs = path.resolve(root, file);
      const raw = await fs.readFile(abs, "utf8");

      let title: string | undefined;
      let description = "";
      if (raw.startsWith("---")) {
        const { data: fm } = matter(raw);
        title = (fm.title as string | undefined) ?? undefined;
        description = (fm.description as string | undefined) ?? "";
      }
      if (!title) {
        const m = raw.match(/^#\s+(.+)$/m);
        title = m ? m[1].trim() : undefined;
      }
      if (!title) {
        const base = file.replace(/\\/g, "/").replace(/\.md$/, "");
        title = path.posix.basename(base);
      }

      const base = file
        .replace(/\\/g, "/")
        .replace(/^docs\//, "")
        .replace(/\.md$/, "");
      const slug = base.replace(/(^|\/)index$/, "$1");
      const fileHash = sha256(raw);
      yield { file, slug, title, description, fileHash };
    }
  }

  // function escapeHtml(s: string) {
  //   return String(s).replace(
  //     /[&<>"']/g,
  //     (m) =>
  //       (
  //         ({
  //           "&": "&amp;",
  //           "<": "&lt;",
  //           ">": "&gt;",
  //           '"': "&quot;",
  //           "'": "&#39;",
  //         }) as const
  //       )[m]!,
  //   );
  // }

  async function isUpToDate(meta: PageMeta) {
    try {
      const outPath = getOutPath(meta.slug);
      const cachePath = getCachePath(meta.slug);
      await fs.access(outPath);
      const expectedMeta = await createCacheMeta(meta);
      const raw = await fs.readFile(cachePath, "utf8");
      const actualMeta = JSON.parse(raw) as Partial<OgCacheMeta>;
      return (
        actualMeta.version === expectedMeta.version &&
        actualMeta.sourcePath === expectedMeta.sourcePath &&
        actualMeta.sourceHash === expectedMeta.sourceHash &&
        actualMeta.inputSignature === expectedMeta.inputSignature
      );
    } catch {
      return false;
    }
  }

  async function renderSvg(meta: PageMeta) {
    const [font, font2] = await ensureFont();
    const html = `
      <div style="
        position:relative;
        width:${SIZE.width}px;height:${SIZE.height}px;
        display:flex;flex-direction:column;color:#fff;">
        <div style="display:flex;flex-direction:column;padding:240px 64px 64px 64px;height:100%;justify-content:space-between;">
          <div style="display:flex;flex-direction:column;">
            <div style="font-size:52px;line-height:1.2;font-weight:700;max-width:1000px;font-family:'Flex Sans GB SemiBold';">
              ${meta.title}
            </div>
            ${
              meta.description
                ? `<div style="margin-top:24px;font-size:28px;opacity:.90;max-width:1000px;">
                     ${meta.description}
                   </div>`
                : ``
            }
          </div>
          <div style="font-size:20px;opacity:.72">/${meta.slug}</div>
        </div>
      </div>`;

    const vnode = satoriHtml(html);
    return await satori(vnode, {
      width: SIZE.width,
      height: SIZE.height,
      fonts: [
        { name: "Frex Sans GB", data: font, weight: 400, style: "normal" },
        {
          name: "Frex Sans GB SemiBold",
          data: font2,
          weight: 600,
          style: "normal",
        },
      ],
    });
  }

  async function svgToOutput(svg: string) {
    const bg = await ensureBgBuffer();
    return await sharp(bg)
      .resize(SIZE.width, SIZE.height, { fit: "cover" })
      .composite([{ input: Buffer.from(svg) }])
      .webp(WEBP_OPTIONS)
      .toBuffer();
  }

  async function renderOne(meta: PageMeta) {
    if (await isUpToDate(meta)) return;

    const svg = await renderSvg(meta);
    const output = await svgToOutput(svg);

    const outPath = getOutPath(meta.slug);
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, output);
    await writeCacheMeta(meta);
  }

  async function generateAll() {
    const start = Date.now();
    await Promise.all([ensureFont(), ensureBgBuffer()]);

    const satoriLimiter = pLimit(SATORI_CONCURRENCY);
    const sharpLimiter = pLimit(SHARP_CONCURRENCY);

    const tasks: Promise<void>[] = [];
    let count = 0;

    for await (const meta of iteratePages()) {
      tasks.push(
        satoriLimiter(async () => {
          if (await isUpToDate(meta)) return;

          const svg = await renderSvg(meta);

          // Sharp 处理放入单独的限流器
          await sharpLimiter(async () => {
            const output = await svgToOutput(svg);
            const outPath = getOutPath(meta.slug);
            await fs.mkdir(path.dirname(outPath), { recursive: true });
            await fs.writeFile(outPath, output);
            await writeCacheMeta(meta);
          });

          count++;
          // @ts-ignore
          if (
            typeof global !== "undefined" &&
            typeof (global as any).gc === "function" &&
            count % 50 === 0
          ) {
            try {
              (global as any).gc();
            } catch {}
          }
        }),
      );
    }

    await Promise.allSettled(tasks);
    const ms = Date.now() - start;
    console.log(
      `[og-satori] generated ${count} images into /${OUT_DIR} in ${ms}ms (satori=${SATORI_CONCURRENCY}, sharp=${SHARP_CONCURRENCY})`,
    );
  }

  return {
    name: "og-satori",
    apply: () => true,
    async configureServer() {
      await generateAll();
    },
    async buildStart() {
      await generateAll();
    },
  };
}
