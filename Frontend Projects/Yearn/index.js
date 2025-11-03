const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
	toggle.addEventListener('click', () => {
		const isOpen = links.classList.toggle('open');
		toggle.setAttribute('aria-expanded', String(isOpen));
	});
}


document.querySelectorAll('.faq-item').forEach((btn) => {
	btn.addEventListener('click', () => {
		const expanded = btn.getAttribute('aria-expanded') === 'true';
		btn.setAttribute('aria-expanded', String(!expanded));
	});
});
