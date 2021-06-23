const buttonsPaymentMobile = document.querySelectorAll(
	".payment-mobile__switcher-button"
);

if (buttonsPaymentMobile) {
	buttonsPaymentMobile.forEach((item) => {
		item.addEventListener("click", function (e) {
			const fisrtElement = document.querySelectorAll(
				".payment-mobile__switcher-button"
			)[0];
			const cloneFirstElement = fisrtElement.cloneNode(true);

			fisrtElement.innerHTML = this.innerHTML;
			this.innerHTML = cloneFirstElement.innerHTML;
		});
	});
}

const paymentMobileSwitcher = document.querySelector(
	".payment-mobile__switcher-list"
);
const paymentMobileWrapper = document.querySelector(
	".payment-mobile__switcher-list-wrapper"
);

if (paymentMobileSwitcher && paymentMobileWrapper) {
	paymentMobileSwitcher.addEventListener("mouseenter", function (e) {
		paymentMobileWrapper.style.width = `${this.offsetWidth}px`;
	});

	paymentMobileSwitcher.addEventListener("mouseleave", function (e) {
		paymentMobileWrapper.style.width = "auto";
	});
}
