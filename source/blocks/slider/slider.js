let swiper = new Swiper(".swiper-container", {
	slidesPerView: "auto",
	// direction: getDirection(),
	navigation: {
		nextEl: ".slider__button--next",
		prevEl: ".slider__button--prev",
	},
	// on: {
	// 	resize: function () {
	// 		swiper.changeDirection(getDirection());
	// 	},
	// },
});

function getDirection() {
	let windowWidth = window.innerWidth;
	let direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

	return direction;
}
