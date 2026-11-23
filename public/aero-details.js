(() => {
	const SELECTOR = '.sidebar-content details, .sl-markdown-content details, .ls-faq details, .cr-history details';
	const EASE = 'cubic-bezier(.2, .8, .2, 1)';
	const reduced = matchMedia('(prefers-reduced-motion: reduce)');
	const running = new WeakMap();

	const finish = (el) => {
		const a = running.get(el);
		if (a) { a.onfinish = null; a.cancel(); running.delete(el); }
		el.style.height = el.style.overflow = el.style.boxSizing = '';
	};

	const animateHeight = (el, from, to, done) => {
		el.style.boxSizing = 'border-box';
		el.style.overflow = 'hidden';
		const duration = Math.min(420, 200 + Math.abs(to - from) * 0.35);
		const anim = el.animate({ height: [`${from}px`, `${to}px`] }, { duration, easing: EASE });
		running.set(el, anim);
		anim.onfinish = () => { finish(el); done && done(); };
	};

	const revealChildren = (el) => {
		const list = el.querySelector(':scope > ul');
		const items = list ? [...list.children] : [...el.children].filter((c) => c.tagName !== 'SUMMARY');
		items.slice(0, 14).forEach((item, i) => {
			item.animate(
				{ opacity: [0, 1], transform: ['translateY(-6px)', 'none'] },
				{ duration: 260, delay: 40 + i * 22, easing: EASE, fill: 'backwards' },
			);
		});
	};

	document.addEventListener('click', (e) => {
		if (reduced.matches || e.defaultPrevented || e.button !== 0) return;
		const summary = e.target.closest('summary');
		const el = summary && summary.parentElement;
		if (!el || el.tagName !== 'DETAILS' || !el.matches(SELECTOR) || summary !== el.querySelector(':scope > summary')) return;
		e.preventDefault();

		const start = el.getBoundingClientRect().height;
		const closing = el.open && !el.dataset.aeroClosing;
		finish(el);

		if (closing) {
			el.open = false;
			const end = el.getBoundingClientRect().height;
			el.open = true;
			el.dataset.aeroClosing = '1';
			animateHeight(el, start, end, () => { delete el.dataset.aeroClosing; el.open = false; });
		} else {
			delete el.dataset.aeroClosing;
			el.open = true;
			const end = el.getBoundingClientRect().height;
			animateHeight(el, start, end);
			revealChildren(el);
		}
	});
})();
