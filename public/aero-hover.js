(() => {
	const LINGER_MS = 700;
	const ITEM = 'a, summary';

	const init = () => {
		const root = document.querySelector('.sidebar-content');
		if (!root || root.dataset.aeroHover) return;
		root.dataset.aeroHover = '1';

		const pill = document.createElement('span');
		pill.className = 'aero-hover-pill';
		pill.setAttribute('aria-hidden', 'true');
		root.prepend(pill);

		let current = null;
		let hideTimer = 0;

		const place = (el, animate) => {
			const box = root.getBoundingClientRect();
			const r = el.getBoundingClientRect();
			if (!r.width || !r.height) return;
			pill.classList.toggle('is-instant', !animate);
			pill.style.width = `${r.width}px`;
			pill.style.height = `${r.height}px`;
			pill.style.transform = `translate(${r.left - box.left}px, ${r.top - box.top}px)`;
			if (!animate) void pill.offsetWidth;
			pill.classList.remove('is-instant');
		};

		const show = (el) => {
			clearTimeout(hideTimer);
			const visible = pill.classList.contains('is-visible');
			place(el, visible);
			pill.classList.add('is-visible');
			current = el;
		};

		const scheduleHide = () => {
			clearTimeout(hideTimer);
			hideTimer = setTimeout(() => {
				pill.classList.remove('is-visible');
				current = null;
			}, LINGER_MS);
		};

		root.addEventListener('pointerover', (e) => {
			if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
			const el = e.target.closest(ITEM);
			if (!el || !root.contains(el)) return;
			if (el === current) { clearTimeout(hideTimer); return; }
			show(el);
		});
		root.addEventListener('pointerout', (e) => {
			const from = e.target.closest(ITEM);
			const to = e.relatedTarget && e.relatedTarget.closest ? e.relatedTarget.closest(ITEM) : null;
			if (from && from !== to) scheduleHide();
		});
		root.addEventListener('focusin', (e) => {
			const el = e.target.closest(ITEM);
			if (el && el.matches(':focus-visible')) show(el);
		});
		root.addEventListener('focusout', scheduleHide);
		root.addEventListener('toggle', () => current && requestAnimationFrame(() => place(current, true)), true);
		window.addEventListener('resize', () => current && place(current, false));
	};

	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
	else init();
})();
