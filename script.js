document.addEventListener('DOMContentLoaded', () => {
	const languageBtn = document.getElementById('languageBtn');
	const menuToggle = document.getElementById('menuToggle');
	const navLinks = document.getElementById('navLinks');
	const yearEl = document.getElementById('year');

	let currentLanguage = 'en';

	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}

	function setLanguage(lang) {
		currentLanguage = lang === 'zh' ? 'zh' : 'en';
		document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'zh-CN';

		const key = currentLanguage === 'en' ? 'en' : 'zh';
		document.querySelectorAll('[data-en][data-zh]').forEach((el) => {
			el.textContent = el.dataset[key] || el.textContent;
		});

		if (languageBtn) {
			languageBtn.textContent = currentLanguage === 'en' ? 'EN | 中文' : '中文 | EN';
			languageBtn.setAttribute('aria-pressed', String(currentLanguage === 'zh'));
		}
	}

	if (languageBtn) {
		languageBtn.addEventListener('click', () => {
			setLanguage(currentLanguage === 'en' ? 'zh' : 'en');
		});
	}

	if (menuToggle && navLinks) {
		menuToggle.addEventListener('click', () => {
			navLinks.classList.toggle('open');
			const isOpen = navLinks.classList.contains('open');
			menuToggle.setAttribute('aria-expanded', String(isOpen));
		});

		const links = navLinks.querySelectorAll('a');
		if (links.length) {
			links.forEach((link) => {
				link.addEventListener('click', () => {
					navLinks.classList.remove('open');
					menuToggle.setAttribute('aria-expanded', 'false');
				});
			});
		}
	} else {
		// Fallback: attach handlers to any .nav-links anchors if present
		document.querySelectorAll('.nav-links a').forEach((link) => {
			link.addEventListener('click', () => {
				if (navLinks) navLinks.classList.remove('open');
				if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
			});
		});
	}

	// Initialize
	setLanguage(currentLanguage);
	if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
});
