const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
const header = document.querySelector(".header");
const navActive = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;

	// if (nav && nav.contains('navigation--active')) {
	// 	return;
	// }

	if (currentScroll <= 30) {
		body.classList.remove(scrollUp);
		header ? header.classList.remove("header--fixed") : 0;
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
		body.classList.remove(scrollUp);
		body.classList.add(scrollDown);
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains(scrollDown)
	) {
		if (header && currentScroll > header.offsetHeight) {
			header ? header.classList.add("header--fixed") : 0;
		}
		body.classList.remove(scrollDown);
		body.classList.add(scrollUp);
	}
	lastScroll = currentScroll;
});
