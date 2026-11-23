(() => {
	const SHOW_DELAY = 350;
	const HIDE_DELAY = 260;
	const reduced = matchMedia('(prefers-reduced-motion: reduce)');
	if (!matchMedia('(hover: hover)').matches) return;

	const zh = (document.documentElement.lang || '').startsWith('zh');
	const T = zh
		? { open: '在当前页面打开', newTab: '在新标签页中打开', loading: '加载中…', failed: '无法加载此页面。' }
		: { open: 'Open page', newTab: 'Open in a new tab', loading: 'Loading…', failed: 'This page could not be loaded.' };

	const cache = new Map();
	const parser = new DOMParser();
	const load = (pathname) => {
		if (!cache.has(pathname)) {
			cache.set(
				pathname,
				fetch(pathname, { credentials: 'same-origin' })
					.then((r) => (r.ok ? r.text() : null))
					.then((html) => (html ? parser.parseFromString(html, 'text/html') : null))
					.catch(() => null),
			);
		}
		return cache.get(pathname);
	};

	const el = (tag, cls, text) => {
		const n = document.createElement(tag);
		if (cls) n.className = cls;
		if (text != null) n.textContent = text;
		return n;
	};
	const icon = (d) => {
		const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		s.setAttribute('viewBox', '0 0 24 24');
		s.setAttribute('aria-hidden', 'true');
		s.innerHTML = d;
		return s;
	};

	const card = el('div', 'aero-preview');
	card.setAttribute('role', 'region');
	card.hidden = true;
	const head = el('div', 'aero-preview__head');
	const scroller = el('div', 'aero-preview__scroll');
	const foot = el('div', 'aero-preview__foot');
	const openHere = el('a', 'aero-preview__open', T.open);
	const openNew = el('a', 'aero-preview__newtab');
	openNew.target = '_blank';
	openNew.rel = 'noopener';
	openNew.title = T.newTab;
	openNew.setAttribute('aria-label', T.newTab);
	openNew.append(icon('<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'));
	openHere.append(icon('<path d="M5 12h14M13 6l6 6-6 6"/>'));
	foot.append(openHere, openNew);
	card.append(head, scroller, foot);
	document.body.append(card);

	let anchor = null;
	let showTimer = 0;
	let hideTimer = 0;
	let token = 0;

	const previewable = (a) => {
		if (!a || !a.href || a.target === '_blank' || a.hasAttribute('download')) return null;
		if (a.closest('.sl-anchor-link, .aero-preview, .expressive-code, .pagination-links')) return null;
		let url;
		try { url = new URL(a.href, location.href); } catch { return null; }
		if (url.origin !== location.origin) return null;
		if (url.pathname === location.pathname && !url.hash) return null;
		if (/\.(png|jpe?g|webp|gif|svg|pdf|zip|jar)$/i.test(url.pathname)) return null;
		return url;
	};

	function trail(doc) {
		const current = doc.querySelector('.sidebar-content a[aria-current="page"]');
		const parts = [];
		let d = current?.closest('details');
		while (d) {
			const label = d.querySelector(':scope > summary .group-label')?.textContent?.trim();
			if (label) parts.unshift(label);
			d = d.parentElement?.closest('details');
		}
		const topic = doc.querySelector('.starlight-sidebar-topics-current')?.textContent?.trim();
		if (topic) parts.unshift(topic);
		return parts;
	}

	function article(doc, base) {
		const src = doc.querySelector('.sl-markdown-content');
		if (!src) return null;
		const copy = src.cloneNode(true);
		copy.querySelectorAll('script, style, iframe, noscript, .expressive-code .copy, .cr-history').forEach((n) => n.remove());
		for (const n of copy.querySelectorAll('*')) {
			for (const attr of [...n.attributes]) if (attr.name.startsWith('on')) n.removeAttribute(attr.name);
			if (n.id) { n.dataset.previewId = n.id; n.removeAttribute('id'); }
			for (const name of ['href', 'src', 'poster']) {
				const v = n.getAttribute(name);
				if (v && !v.startsWith('data:')) { try { n.setAttribute(name, new URL(v, base).href); } catch {} }
			}
			if (n.hasAttribute('srcset')) n.removeAttribute('srcset');
			if (n.tagName === 'IMG') n.loading = 'lazy';
			if (n.tagName === 'A') n.tabIndex = -1;
		}
		for (const link of doc.querySelectorAll('link[rel="stylesheet"][href*="/ec."]')) {
			const href = new URL(link.getAttribute('href'), base).href;
			if (![...document.styleSheets].some((s) => s.href === href)) {
				const l = document.createElement('link');
				l.rel = 'stylesheet';
				l.href = href;
				document.head.append(l);
			}
		}
		copy.classList.add('aero-preview__article');
		return copy;
	}

	function renderHead(crumbs, title) {
		const parts = [];
		if (crumbs?.length) parts.push(el('p', 'aero-preview__path', crumbs.join(' › ')));
		parts.push(el('p', 'aero-preview__title', title));
		head.replaceChildren(...parts);
	}

	function renderLoading(a, url) {
		renderHead([url.pathname.replace(/^\/|\/$/g, '').split('/')[0] || ''], a.textContent.trim() || url.pathname);
		const sk = el('div', 'aero-preview__skeleton');
		sk.innerHTML = '<span></span><span></span><span></span><span></span>';
		scroller.replaceChildren(sk);
		scroller.scrollTop = 0;
		openHere.href = url.href;
		openNew.href = url.href;
	}

	function render(doc, url) {
		const title = doc.querySelector('h1#_top')?.textContent?.trim() || doc.title.replace(/\s*\|.*$/, '');
		renderHead(trail(doc), title);
		const body = article(doc, url);
		scroller.replaceChildren(body ?? el('p', 'aero-preview__empty', doc.querySelector('meta[name="description"]')?.content || ''));
		scroller.scrollTop = 0;
		if (url.hash && body) {
			const id = decodeURIComponent(url.hash.slice(1));
			const target = [...body.querySelectorAll('[data-preview-id]')].find((n) => n.dataset.previewId === id);
			const block = target?.closest('.sl-heading-wrapper') ?? target;
			if (block) {
				scroller.scrollTop = block.offsetTop - 8;
				block.classList.add('aero-preview__target');
			}
		}
	}

	function place() {
		if (!anchor) return;
		const r = anchor.getClientRects()[0] ?? anchor.getBoundingClientRect();
		const gap = 10;
		const margin = 12;
		const w = card.offsetWidth;
		const hgt = card.offsetHeight;
		let left = r.left + scrollX;
		left = Math.max(scrollX + margin, Math.min(left, scrollX + innerWidth - w - margin));
		const below = innerHeight - r.bottom >= hgt + gap + margin || r.top < hgt + gap + margin;
		card.style.left = `${left}px`;
		card.style.top = `${below ? r.bottom + scrollY + gap : r.top + scrollY - hgt - gap}px`;
		card.dataset.side = below ? 'below' : 'above';
	}

	async function show(a, url) {
		const mine = ++token;
		anchor = a;
		card.setAttribute('aria-label', a.textContent.trim());
		renderLoading(a, url);
		card.hidden = false;
		place();
		requestAnimationFrame(() => card.classList.add('is-open'));
		const doc = await load(url.pathname);
		if (mine !== token || anchor !== a) return;
		if (!doc) {
			scroller.replaceChildren(el('p', 'aero-preview__empty', T.failed));
			return;
		}
		render(doc, url);
		place();
	}

	function hide(now = false) {
		clearTimeout(showTimer);
		clearTimeout(hideTimer);
		const go = () => {
			token++;
			anchor = null;
			card.classList.remove('is-open');
			const done = () => { if (!anchor) card.hidden = true; };
			if (reduced.matches || now) done();
			else setTimeout(done, 160);
		};
		if (now) go();
		else hideTimer = setTimeout(go, HIDE_DELAY);
	}

	const inScope = (n) => n?.closest?.('.sl-markdown-content, .cr-history') && !card.contains(n);

	document.addEventListener('pointerover', (e) => {
		if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
		if (card.contains(e.target)) { clearTimeout(hideTimer); clearTimeout(showTimer); return; }
		const a = e.target.closest?.('a');
		if (!a || !inScope(a)) return;
		const url = previewable(a);
		if (!url) return;
		clearTimeout(hideTimer);
		if (a === anchor) return;
		clearTimeout(showTimer);
		showTimer = setTimeout(() => show(a, url), anchor ? 120 : SHOW_DELAY);
	});
	document.addEventListener('pointerout', (e) => {
		const to = e.relatedTarget;
		if (card.contains(e.target)) {
			if (!card.contains(to) && to?.closest?.('a') !== anchor) hide();
			return;
		}
		const from = e.target.closest?.('a');
		if (!from || from === to?.closest?.('a')) return;
		clearTimeout(showTimer);
		if (from === anchor && !card.contains(to)) hide();
	});
	document.addEventListener('focusin', (e) => {
		const a = e.target.closest?.('a');
		if (!a || !inScope(a) || !a.matches(':focus-visible')) return;
		const url = previewable(a);
		if (url) { clearTimeout(hideTimer); show(a, url); }
	});
	document.addEventListener('focusout', (e) => { if (e.target === anchor) hide(); });
	document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && anchor) hide(true); });
	addEventListener('scroll', () => anchor && place(), { passive: true });
	addEventListener('resize', () => anchor && hide(true));
	document.addEventListener('click', (e) => {
		const a = e.target.closest?.('a');
		if (anchor && (a === anchor || (a && card.contains(a) && a !== openNew))) hide(true);
	});
})();
