const buttonsShowMore = document.querySelectorAll(".payment-list__more");

buttonsShowMore.forEach((btn) => {
	btn.addEventListener("click", function (e) {
		const paymentListSection = btn.parentElement.parentElement;
		const list = paymentListSection.querySelector(".payment-list__list");

		const isActive = btn.classList.toggle("payment-list__more--active");

		paymentListSection.classList.toggle("payment-list--shown-list");

		isActive ? showItems(list) : hiddenItems(list);
	});
});

if (buttonsShowMore) {
	optimizedResize.add(function () {
		const paymentLists = document.querySelectorAll(".payment-list__list");
		paymentLists.forEach((list) => hiddenItems(list));
	});
}

document.addEventListener("DOMContentLoaded", function (e) {
	const paymentListSections = document.querySelectorAll(".payment-list");

	paymentListSections.forEach((seciton) => {
		const list = seciton.querySelector(".payment-list__list");
		const countText = seciton.querySelector(".payment-list__count");

		hiddenItems(list);
		countText.innerHTML = list.querySelectorAll('li').length;
	});
});

function showItems(list) {
	list.querySelectorAll("li").forEach((item) => (item.style.display = "block"));
}

function hiddenItems(list) {
	if (!list.parentElement.classList.contains("payment-list--shown-list")) {
		const elementsList = list.querySelectorAll(".payment-list__item");
		const elementsWillFit = Math.round(
			list.offsetWidth / (elementsList[0].offsetWidth + 40)
		);

		let maxSHow = 11;

		if (elementsWillFit <= 3) {
			maxSHow = 5;
		} else if (elementsWillFit <= 4) {
			maxSHow = 7;
		} else if (elementsWillFit <= 5) {
			maxSHow = 9;
		} else if (elementsWillFit <= 6) {
			maxSHow = 11;
		}

		elementsList.forEach((item, index) =>
			index > maxSHow
				? (item.style.display = "none")
				: (item.style.display = "block")
		);
	}
}
