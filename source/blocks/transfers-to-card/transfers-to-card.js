
let swiperTransferCard = new Swiper(".transfer-to-card .swiper-container", {
	slidesPerView: "auto",
	// direction: getDirection(),
	loop: true,
	navigation: {
		nextEl: ".transfer-to-card .slider__button--next",
		prevEl: ".transfer-to-card .slider__button--prev",
	},
	// on: {
	// 	resize: function () {
	// 		swiper.changeDirection(getDirection());
	// 	},
	// },
});
