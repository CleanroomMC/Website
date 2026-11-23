import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

export const onRequest = defineRouteMiddleware((context) => {
	const { entry, head } = context.locals.starlightRoute;
	const image = new URL(`/og/${entry.id}.jpg`, context.site ?? context.url).href;
	const alt = `${entry.data.title} | CleanroomMC`;
	head.push(
		{ tag: 'meta', attrs: { property: 'og:image', content: image } },
		{ tag: 'meta', attrs: { property: 'og:image:type', content: 'image/jpeg' } },
		{ tag: 'meta', attrs: { property: 'og:image:width', content: String(OG_WIDTH) } },
		{ tag: 'meta', attrs: { property: 'og:image:height', content: String(OG_HEIGHT) } },
		{ tag: 'meta', attrs: { property: 'og:image:alt', content: alt } },
		{ tag: 'meta', attrs: { name: 'twitter:image', content: image } },
		{ tag: 'meta', attrs: { name: 'twitter:image:alt', content: alt } },
	);
});
