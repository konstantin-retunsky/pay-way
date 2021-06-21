const navToggle = document.querySelector(".header__menu-toggle");
const links = document.querySelectorAll(".navigation__link");

if (navToggle) {
	const nav = document.querySelector(".navigation");
	navToggle.addEventListener("click", (e) =>
		nav ? nav.classList.toggle("navigation--active") : 0
	);
}

if (links) {
	links.forEach((link) => {
		link.addEventListener("click", (e) => {
			const activeLink = document.querySelector(".navigation__link--active");
			activeLink ? activeLink.classList.remove('navigation__link--active') : 0
			link.classList.add('navigation__link--active');
		});
	});
}
