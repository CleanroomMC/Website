(() => {
	const init = () => {
		const nav = document.querySelector('.right-sidebar starlight-toc nav');
		const list = nav && nav.querySelector(':scope > ul');
		if (!list || nav.dataset.aeroToc) return;
		nav.dataset.aeroToc = '1';

		const pill = document.createElement('span');
		pill.className = 'aero-toc-pill';
		const bar = document.createElement('span');
		bar.className = 'aero-toc-bar';
		for (const el of [pill, bar]) el.setAttribute('aria-hidden', 'true');
		nav.append(pill, bar);

		let shown = false;
		const place = () => {
			const link = nav.querySelector('a[aria-current="true"]');
			if (!link) { pill.classList.remove('is-on'); bar.classList.remove('is-on'); shown = false; return; }
			const box = nav.getBoundingClientRect();
			const r = link.getBoundingClientRect();
			const x = r.left - box.left;
			const y = r.top - box.top;
			for (const el of [pill, bar]) el.classList.toggle('is-instant', !shown);
			pill.style.width = `${r.width}px`;
			pill.style.height = `${r.height}px`;
			pill.style.transform = `translate(${x}px, ${y}px)`;
			bar.style.height = `${Math.max(12, r.height - 8)}px`;
			bar.style.transform = `translateY(${y + 4}px)`;
			if (!shown) { void pill.offsetWidth; shown = true; }
			for (const el of [pill, bar]) { el.classList.remove('is-instant'); el.classList.add('is-on'); }
		};

		new MutationObserver(place).observe(list, { attributes: true, attributeFilter: ['aria-current'], subtree: true });
		window.addEventListener('resize', place);
		requestAnimationFrame(place);
	};

	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
	else init();
})();
