let swiper = new Swiper(".payment-loans .swiper-container", {
	slidesPerView: "auto",
	// direction: getDirection(),
	loop: true,
	navigation: {
		nextEl: ".payment-loans .slider__button--next",
		prevEl: ".payment-loans .slider__button--prev",
	},
	// on: {
	// 	resize: function () {
	// 		swiper.changeDirection(getDirection());
	// 	},
	// },
});
