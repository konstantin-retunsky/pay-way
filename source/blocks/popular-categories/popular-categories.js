

let popularCategories = new Swiper(".popular-categories .swiper-container", {
	slidesPerView: "auto",
	direction: getDirectionCategories(),
	loop: true,
	navigation: {
		nextEl: ".popular-categories .slider__button--next",
		prevEl: ".popular-categories .slider__button--prev",
	},
	on: {
		resize: function () {
			this.changeDirection(getDirectionCategories());
		},
	},
});


function getDirectionCategories() {
	return window.innerWidth <= 1100 ? "vertical" : "horizontal";
}
