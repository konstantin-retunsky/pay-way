
document.addEventListener("DOMContentLoaded", function (e) {
	const buttonsShowMore = document.querySelectorAll(".payment-list__more")

	buttonsShowMore.forEach((btn) => {
		btn.addEventListener("click", showMore)
	})

	function showMore() {
		let req = new XMLHttpRequest()
		req.open(
			"POST",
			"https://cp.test.1pay.uz/ru/all_payments/services/?site",
			true
		)
		req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
		req.onreadystatechange = () => {
			if (req.readyState == 4 && req.status == 200) {
				let response = JSON.parse(req.response)
				response = response.filter((item) => item.category_id == this.value)

				const parentListButton = document.querySelector(
					`.payment-list__list[category="${this.value}"]`
				)
				const itemsList = parentListButton.querySelectorAll(
					".payment-list__item"
				)

				if (itemsList.length < response.length) {
					response.forEach((item) => {
						parentListButton.insertAdjacentHTML(
							"beforeend",
							`
							<li class="payment-list__item" id="${item.id}">
								<a class="payment-list__item-link" href="/${
									window.location.pathname.split("/")[1]
								}/get_payment/?provider_name=${item.provider_name}"
									value="${item.provider_name}">
									<img class="payment-list__img" src="/img/services/${item.id}/100x100.webp"
										alt="${item.provider_name}" width="130" height="64">
								</a>
							</li>
						`
						)
					})
				}
			}
		}
		req.send()

		const paymentListSection = this.parentElement.parentElement
		const list = paymentListSection.querySelector(".payment-list__list")

		const isActive = this.classList.toggle("payment-list__more--active")

		isActive
			? (this.lastChild.nodeValue = "Скрыть")
			: (this.lastChild.nodeValue = "Показать всё")

		paymentListSection.classList.toggle("payment-list--shown-list")

		isActive ? showItems(list) : hiddenItems(list)
	}

	if (buttonsShowMore) {
		optimizedResize.add(function () {
			const paymentLists = document.querySelectorAll(".payment-list__list")
			paymentLists.forEach((list) => hiddenItems(list))
		})
	}

	function showItems(list) {
		list
			.querySelectorAll("li")
			.forEach((item) => (item.style.display = "block"))
	}

	function hiddenItems(list) {
		if (!list.parentElement.classList.contains("payment-list--shown-list")) {
			const elementsList = list.querySelectorAll(".payment-list__item")
			const elementsWillFit = Math.round(
				list.offsetWidth / (elementsList[0].offsetWidth + 40)
			)

			let maxSHow = 11

			if (elementsWillFit <= 3) {
				maxSHow = 5
			} else if (elementsWillFit <= 4) {
				maxSHow = 7
			} else if (elementsWillFit <= 5) {
				maxSHow = 9
			} else if (elementsWillFit <= 6) {
				maxSHow = 11
			}

			elementsList.forEach((item, index) =>
				index > maxSHow
					? (item.style.display = "none")
					: (item.style.display = "block")
			)
		}
	}
})

