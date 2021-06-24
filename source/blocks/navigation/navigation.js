const navToggle = document.querySelector(".header__menu-toggle");
const links = document.querySelectorAll(".navigation__link");
const nav = document.querySelector(".navigation");

if (navToggle && nav) {
	navToggle.addEventListener("click", (e) => {
		nav.classList.toggle("navigation--active");	
		navToggle.classList.toggle("header__menu-toggle--open");	
	});
}

if (links) {
	links.forEach((link) => {
		link.addEventListener("click", (e) => {
			const activeLink = document.querySelector(".navigation__link--active");
			activeLink ? activeLink.classList.remove("navigation__link--active") : 0;
			link.classList.add("navigation__link--active");
		});
	});
}

document.addEventListener("DOMContentLoaded", function(e) {
	const currentPage = document.body.dataset.currentPage;

	if (currentPage) {
		const navActive = document.querySelector('.navigation__link--active')
		const currentNavActive = document.querySelector(`.navigation__link[value=${currentPage}]`)

		if (currentNavActive) {
			navActive.classList.remove('navigation__link--active')
			currentNavActive.classList.add('navigation__link--active')
		}
	}
});
