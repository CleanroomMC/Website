import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import fg from "fast-glob";
import matter from "gray-matter";
import satori from "satori";
import { html as satoriHtml } from "satori-html";
import sharp from "sharp";
import pLimit from "p-limit";

const SIZE = { width: 1200, height: 630 };
const OUT_DIR = "docs/public/og";
const FONT_FILE = "docs/.vitepress/assets/FlexSansGB-Regular.ttf";
const FONT_FILE_SEMIBOLD = "docs/.vitepress/assets/FlexSansGB-SemiBold.ttf";
const BG_FILE = "docs/.vitepress/assets/cleanroom-og-base.jpg";
const SHARP_CONCURRENCY = 4;
const SATORI_CONCURRENCY = Math.max(4, os.cpus().length);

type PageMeta = {
  file: string;
  slug: string;
  title: string;
  description?: string;
};

export default function SatoriOg() {
  const root = process.cwd();
  let fontData: Buffer | undefined;
  let fontData2: Buffer | undefined;
  let bgBase64: string | undefined;
  let fontMtime = 0;
  let fontMtime2 = 0;
  let bgMtime = 0;

  async function ensureFont() {
    if (!fontData) {
      const fontPath = path.resolve(root, FONT_FILE);
      const [buf, st] = await Promise.all([
        fs.readFile(fontPath),
        fs.stat(fontPath),
      ]);
      fontData = buf;
      fontMtime = st.mtimeMs;
    }
    if (!fontData2) {
      const fontPath = path.resolve(root, FONT_FILE_SEMIBOLD);
      const [buf, st] = await Promise.all([
        fs.readFile(fontPath),
        fs.stat(fontPath),
      ]);
      fontData2 = buf;
      fontMtime2 = st.mtimeMs;
    }
    return [fontData!, fontData2!];
  }

  async function ensureBgBase64() {
    if (!bgBase64) {
      const bgPath = path.resolve(root, BG_FILE);
      const [buf, st] = await Promise.all([
        fs.readFile(bgPath),
        fs.stat(bgPath),
      ]);
      bgBase64 = `data:image/jpeg;base64,${buf.toString("base64")}`;
      bgMtime = st.mtimeMs;
    }
    return bgBase64!;
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
      yield { file, slug, title, description };
    }
  }

  function escapeHtml(s: string) {
    return String(s).replace(
      /[&<>"']/g,
      (m) =>
        (
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          }) as const
        )[m]!,
    );
  }

  async function isUpToDate(meta: PageMeta) {
    try {
      const src = await fs.stat(path.resolve(root, meta.file));
      const out = await fs.stat(
        path.resolve(root, OUT_DIR, (meta.slug || "index") + ".jpg"),
      );
      const latestInput = Math.max(src.mtimeMs, bgMtime, fontMtime);
      return out.mtimeMs >= latestInput;
    } catch {
      return false;
    }
  }

  async function renderSvg(meta: PageMeta) {
    const [bg, [font, font2]] = await Promise.all([
      ensureBgBase64(),
      ensureFont(),
    ]);
    const html = `
      <div style="
        position:relative;
        width:${SIZE.width}px;height:${SIZE.height}px;
        display:flex;flex-direction:column;color:#fff;">
        <img src="${bg}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;"/>
        <div style="display:flex;flex-direction:column;padding:240px 64px 64px 64px;height:100%;justify-content:space-between;">
          <div style="display:flex;flex-direction:column;">
            <div style="font-size:52px;line-height:1.2;font-weight:700;max-width:1000px;font-family:'Flex Sans GB SemiBold';">
              ${escapeHtml(meta.title)}
            </div>
            ${
              meta.description
                ? `<div style="margin-top:24px;font-size:28px;opacity:.90;max-width:1000px;">
                     ${escapeHtml(meta.description)}
                   </div>`
                : ``
            }
          </div>
          <div style="font-size:20px;opacity:.72">/${escapeHtml(meta.slug)}</div>
        </div>
      </div>`;

    const vnode = satoriHtml(html);
    return await satori(vnode, {
      width: SIZE.width,
      height: SIZE.height,
      fonts: [
        { name: "Flex Sans GB", data: font, weight: 400, style: "normal" },
        {
          name: "Flex Sans GB SemiBold",
          data: font2,
          weight: 600,
          style: "normal",
        },
      ],
    });
  }

  async function svgToPng(svg: string) {
    return await sharp(Buffer.from(svg))
      .jpeg({ progressive: true, quality: 90 })
      .toBuffer();
  }

  async function renderOne(meta: PageMeta) {
    if (await isUpToDate(meta)) return;

    const svg = await renderSvg(meta);
    const png = await svgToPng(svg);

    const outPath = path.resolve(root, OUT_DIR, meta.slug || "index") + ".jpg";
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, png);
  }

  async function generateAll() {
    const start = Date.now();
    await Promise.all([ensureFont(), ensureBgBase64()]);

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
            const png = await svgToPng(svg);
            const outPath =
              path.resolve(root, OUT_DIR, meta.slug || "index") + ".jpg";
            await fs.mkdir(path.dirname(outPath), { recursive: true });
            await fs.writeFile(outPath, png);
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
