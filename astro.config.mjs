// Reference astro.config.mjs for the migrated CleanroomMC content.
// If your template already has a config, copy over the bits marked "CleanroomMC".
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import { wiki, groovyScript, renderbook } from './src/sidebar.mjs';
import { aeroDay, aeroNight } from './src/styles/ec-themes.mjs';

const FONTS =
	'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@200..800&family=Atkinson+Hyperlegible+Mono:wght@400..700&family=Lexend:wght@300..900&family=JetBrains+Mono:wght@400..700&display=swap';

export default defineConfig({
	site: 'https://cleanroommc.com',
	integrations: [
		starlight({
			title: 'CleanroomMC',
			description: 'CleanroomMC',
			logo: { src: './src/assets/cleanroom-aero.svg' },
			favicon: '/favicon.svg',

			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				zh: { label: '简体中文', lang: 'zh-CN' },
			},

			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/mAQh8xqvk' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/CleanroomMC' },
				{ icon: 'seti:java', label: 'Cleanroom Maven', href: 'https://repo.cleanroommc.com' },
				{ icon: 'download', label: 'Download', href: 'https://download.cleanroommc.com' },
			],

			editLink: { baseUrl: 'https://github.com/CleanroomMC/Website/edit/main/' },
			lastUpdated: true,

			// CleanroomMC
			plugins: [
				starlightSidebarTopics(
					[
						{ id: 'wiki', label: { en: 'Wiki', 'zh-CN': '维基' }, link: '/wiki/', icon: 'open-book', items: wiki },
						{ id: 'groovy', label: 'GroovyScript', link: '/groovy-script/', icon: 'pen', items: groovyScript },
						{ label: 'RenderBook', link: '/renderbook/', icon: 'desktop', items: renderbook },
						{ label: 'CurseMaven', link: '/curse-maven/', icon: 'puzzle', items: ['curse-maven'] },
					],
					{
						exclude: ['/', '/zh', '/sponsors', '/zh/sponsors'],
						topics: { wiki: ['/zh/wiki/**/*'], groovy: ['/zh/groovy-script/**/*'] },
					},
				),
			],

			components: { PageTitle: './src/components/PageTitle.astro', MarkdownContent: './src/components/MarkdownContent.astro', SocialIcons: './src/components/SocialIcons.astro' },

			routeMiddleware: './src/routeData.ts',

			customCss: ['./src/styles/tokens.css', './src/styles/aero.css', './src/styles/cleanroom.css'],

			expressiveCode: {
				themes: [aeroNight, aeroDay],
				styleOverrides: {
					borderRadius: '18px',
					borderColor: 'var(--line)',
					codeFontFamily: 'var(--font-mono)',
					uiFontFamily: 'var(--font-sans)',
					codeFontSize: '14px',
					codeLineHeight: '22px',
					frames: {
						shadowColor: 'transparent',
						editorActiveTabIndicatorTopColor: 'var(--aqua-fill)',
						frameBoxShadowCssValue: 'var(--shadow-aero)',
						inlineButtonBorder: 'var(--line-strong)',
						inlineButtonBackground: 'var(--sky-100)',
						inlineButtonForeground: 'var(--ink-muted)',
					},
				},
			},

			head: [
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
				{ tag: 'link', attrs: { rel: 'stylesheet', href: FONTS } },
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#266ba2' } },
				{ tag: 'script', attrs: { src: '/aero-hover.js', defer: true } },
				{ tag: 'script', attrs: { src: '/aero-details.js', defer: true } },
				{ tag: 'script', attrs: { src: '/aero-toc.js', defer: true } },
				{ tag: 'script', attrs: { src: '/aero-link-preview.js', defer: true } },
			],
		}),
	],
});
