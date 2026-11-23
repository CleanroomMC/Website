import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { eyebrowFor, renderOgImage, type OgCard } from '../../lib/og';

export const getStaticPaths = (async () => {
	const docs = await getCollection('docs');
	const pages = docs.map((entry) => ({
		params: { slug: entry.id },
		props: {
			card: {
				title: entry.data.title,
				description: entry.data.description,
				eyebrow: eyebrowFor(entry.id),
				path: `/${entry.id}/`,
			} satisfies OgCard,
		},
	}));
	pages.push({
		params: { slug: 'home' },
		props: {
			card: {
				title: 'Minecraft, made new.',
				description: 'Cleanroom Loader: modern Java, modern rendering, and about 99% of the Forge mods you already play on 1.12.2.',
				eyebrow: 'Cleanroom Loader',
				path: '/',
			},
		},
	});
	return pages;
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
	const jpg = await renderOgImage((props as { card: OgCard }).card);
	return new Response(new Uint8Array(jpg), { headers: { 'Content-Type': 'image/jpeg' } });
};
