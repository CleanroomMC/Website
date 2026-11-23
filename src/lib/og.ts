
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import satori from 'satori';
import sharp from 'sharp';

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;
const DESIGN_VERSION = 1;
const CACHE_DIR = path.resolve('node_modules/.cache/cleanroom-og');

export interface OgCard {
	title: string;
	description?: string;
	eyebrow?: string;
	path: string;
}

const require = createRequire(import.meta.url);
const pkgDir = (pkg: string) => path.dirname(require.resolve(`${pkg}/package.json`));
const read = (file: string) => fs.readFileSync(file);
const readFont = (file: string) => {
	const b = fs.readFileSync(file);
	return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) as ArrayBuffer;
};

type Face = { name: string; weight: 400 | 500 | 700; file: string; ranges: [number, number][] };

function facesFrom(pkg: string, cssFile: string, name: string, weight: Face['weight']): Face[] {
	const dir = pkgDir(pkg);
	const css = fs.readFileSync(path.join(dir, cssFile), 'utf8');
	const faces: Face[] = [];
	for (const [, block] of css.matchAll(/@font-face\s*{([^}]*)}/g)) {
		const woff = block.match(/url\(\.\/files\/([^)]+\.woff)\)/)?.[1];
		const range = block.match(/unicode-range:\s*([^;]+);/)?.[1];
		if (!woff || !range) continue;
		const ranges = range.split(',').map((r) => {
			const [lo, hi] = r.trim().replace(/^U\+/i, '').split('-');
			const a = parseInt(lo, 16);
			return [a, hi ? parseInt(hi, 16) : a] as [number, number];
		});
		faces.push({ name, weight, file: path.join(dir, 'files', woff), ranges });
	}
	return faces;
}

let faceList: Face[] | undefined;
function faces() {
	faceList ??= [
		...facesFrom('@fontsource/lexend', '700.css', 'Lexend', 700),
		...facesFrom('@fontsource/atkinson-hyperlegible-next', '400.css', 'Atkinson', 400),
		...facesFrom('@fontsource/atkinson-hyperlegible-next', '700.css', 'Atkinson', 700),
		...facesFrom('@fontsource/noto-sans-sc', '400.css', 'Noto Sans SC', 400),
		...facesFrom('@fontsource/noto-sans-sc', '700.css', 'Noto Sans SC', 700),
	];
	return faceList;
}

const fontCache = new Map<string, ArrayBuffer>();
const isCjk = (cp: number) => cp >= 0x2e80;
function fontsFor(text: string) {
	const cjk = [...new Set([...text].map((c) => c.codePointAt(0)!))].filter(isCjk);
	const picked = faces().filter((f) =>
		f.name === 'Noto Sans SC'
			? cjk.some((cp) => f.ranges.some(([a, b]) => cp >= a && cp <= b))
			: /-latin(-ext)?-\d/.test(f.file),
	);
	const nameOf = (f: Face) => `${f.name}~${path.basename(f.file).replace(/-\d+-normal\.woff$/, '')}`;
	const fonts = picked.map((f) => {
		if (!fontCache.has(f.file)) fontCache.set(f.file, readFont(f.file));
		return { name: nameOf(f), data: fontCache.get(f.file)!, weight: f.weight, style: 'normal' as const };
	});
	const stack = (family: string) =>
		[...new Set(picked.filter((f) => f.name === family || f.name === 'Noto Sans SC').map((f) => `"${nameOf(f)}"`))]
			.sort((a, b) => Number(a.includes('Noto')) - Number(b.includes('Noto')))
			.join(', ');
	return { fonts, display: stack('Lexend'), body: stack('Atkinson') };
}

type Node = { type: string; props: Record<string, unknown> & { style?: Record<string, unknown>; children?: unknown } };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}): Node => ({
	type,
	props: { style, children, ...extra },
});

let logoData: string | undefined;
function logo() {
	logoData ??= `data:image/svg+xml;base64,${read(path.resolve('public/brand/cleanroom-aero.svg')).toString('base64')}`;
	return logoData;
}

const clip = (s: string, max: number) => (s.length > max ? `${s.slice(0, max - 1).trimEnd()}…` : s);

function titleSize(t: string) {
	const n = [...t].length;
	if (n <= 24) return 72;
	if (n <= 40) return 62;
	if (n <= 64) return 52;
	return 44;
}

const PANEL = { left: 52, top: 52, width: 780, height: OG_HEIGHT - 104, padX: 52, padY: 44 };
const INK = '#0a1f2e';

function background(display: string): Node {
	return h(
		'div',
		{
			width: OG_WIDTH, height: OG_HEIGHT, display: 'flex', position: 'relative',
			backgroundImage: 'linear-gradient(180deg, #eefbfc 0%, #c9f1f0 46%, #86dcdf 100%)',
		},
		[
			h('div', {
				position: 'absolute', right: -120, top: 120, width: 640, height: 520, borderRadius: 9999,
				backgroundImage: 'radial-gradient(circle at 50% 55%, rgba(79,217,221,0.55) 0%, rgba(116,221,156,0.25) 38%, rgba(159,227,255,0) 70%)',
			}),
			h('img', { position: 'absolute', right: -40, top: 92, width: 440, height: 440, transform: 'rotate(-8deg)' }, undefined, {
				src: logo(), width: 440, height: 440,
			}),
			h('div', {
				position: 'absolute', left: PANEL.left, top: PANEL.top, width: PANEL.width, height: PANEL.height,
				borderRadius: 40, border: '2px solid rgba(255,255,255,0.95)', backgroundColor: 'rgba(255,255,255,0.74)',
				boxShadow: '0 24px 60px -24px rgba(26,81,128,0.55)',
			}),
			h('div', {
				position: 'absolute', left: PANEL.left + 2, top: PANEL.top + 2, width: PANEL.width - 4, height: 116,
				borderRadius: '38px 38px 50% 50% / 38px 38px 22px 22px',
				backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 100%)',
			}),
			h('div', { position: 'absolute', left: PANEL.left + PANEL.padX, top: PANEL.top + PANEL.padY, display: 'flex', alignItems: 'center', gap: 14 }, [
				h('img', { width: 46, height: 46 }, undefined, { src: logo(), width: 46, height: 46 }),
				h('div', { fontFamily: display, fontWeight: 700, fontSize: 30, letterSpacing: -0.6, color: INK }, 'CleanroomMC'),
			]),
		],
	);
}

function textLayer({ title, description, eyebrow, path: p }: OgCard, font: string, display: string): Node {
	return h('div', { width: OG_WIDTH, height: OG_HEIGHT, display: 'flex', position: 'relative', fontFamily: font }, [
		h(
			'div',
			{
				position: 'absolute', left: PANEL.left + PANEL.padX, top: PANEL.top + PANEL.padY,
				width: PANEL.width - 2 * PANEL.padX, height: PANEL.height - 2 * PANEL.padY,
				display: 'flex', flexDirection: 'column',
			},
			[
				h('div', { height: 46, flexShrink: 0 }),
				h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, paddingTop: 8 }, [
					eyebrow
						? h('div', { fontWeight: 700, fontSize: 21, letterSpacing: 3.4, textTransform: 'uppercase', color: '#0a7378', marginBottom: 14 }, eyebrow)
						: null,
					h('div', { fontFamily: display, fontWeight: 700, fontSize: titleSize(title), lineHeight: 1.08, letterSpacing: -1.6, color: INK }, clip(title, 90)),
					description ? h('div', { marginTop: 20, fontSize: 26, lineHeight: 1.42, color: '#3a5566' }, clip(description, 150)) : null,
				].filter(Boolean)),
				h('div', { display: 'flex', alignItems: 'center', fontSize: 22, color: '#4f6b7b' }, [
					h('div', { color: '#1a5180', fontWeight: 700 }, 'cleanroommc.com'),
					h('div', {}, clip(p.replace(/\/$/, ''), 52)),
				]),
			],
		),
	]);
}

let backgroundPng: Promise<Buffer> | undefined;
function backgroundLayer() {
	backgroundPng ??= (async () => {
		const { fonts, display } = fontsFor('CleanroomMC');
		const svg = await satori(background(display) as never, { width: OG_WIDTH, height: OG_HEIGHT, fonts });
		return sharp(Buffer.from(svg)).png().toBuffer();
	})();
	return backgroundPng;
}

export async function renderOgImage(c: OgCard): Promise<Buffer> {
	const key = crypto.createHash('sha256').update(JSON.stringify({ v: DESIGN_VERSION, c })).digest('hex');
	const cached = path.join(CACHE_DIR, `${key}.jpg`);
	try {
		return await fsp.readFile(cached);
	} catch {}

	const text = [c.title, c.description, c.eyebrow, c.path].filter(Boolean).join(' ');
	const { fonts, display, body } = fontsFor(text);
	const svg = await satori(textLayer(c, body, display) as never, { width: OG_WIDTH, height: OG_HEIGHT, fonts });
	const jpg = await sharp(await backgroundLayer())
		.composite([{ input: Buffer.from(svg) }])
		.jpeg({ quality: 86, chromaSubsampling: '4:4:4' })
		.toBuffer();

	try {
		await fsp.mkdir(CACHE_DIR, { recursive: true });
		await fsp.writeFile(cached, jpg);
	} catch {}
	return jpg;
}

const SECTION: Record<string, [string, string]> = {
	wiki: ['Wiki', '维基'],
	'groovy-script': ['GroovyScript', 'GroovyScript'],
	renderbook: ['RenderBook', 'RenderBook'],
	'curse-maven': ['CurseMaven', 'CurseMaven'],
	sponsors: ['Sponsors', '赞助者'],
	'end-user-guide': ['End User Guide', '用户指南'],
	'cleanroom-mod-development': ['Cleanroom Mod Development', 'Cleanroom 模组开发'],
	'forge-mod-development': ['Forge Mod Development', 'Forge 模组开发'],
	modularui: ['ModularUI', 'ModularUI'],
	proposal: ['Proposal', '提案'],
	getting_started: ['Getting Started', '入门'],
	groovy: ['Groovy', 'Groovy'],
	minecraft: ['Minecraft', 'Minecraft'],
	mods: ['Mods', '模组'],
};

const humanize = (s: string) => s.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export function eyebrowFor(id: string): string | undefined {
	const parts = id.split('/');
	const zh = parts[0] === 'zh';
	if (zh) parts.shift();
	const label = (seg: string) => SECTION[seg]?.[zh ? 1 : 0] ?? humanize(seg);
	const section = parts.slice(0, -1).slice(0, 2).map(label);
	return section.length ? section.join(' · ') : undefined;
}
