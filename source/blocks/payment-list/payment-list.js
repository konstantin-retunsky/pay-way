// document.addEventListener("DOMContentLoaded", function (e) {
// 	const buttonsShowMore = document.querySelectorAll(".payment-list__more")

// 	buttonsShowMore.forEach((btn) => {
// 		btn.addEventListener("click", showMore)
// 	})


// 	const lists = document.querySelectorAll(".payment-list__list")

// 	lists ? lists.forEach(list => hiddenItems(list)) : 0

// 	function showMore() {
// 		const paymentListSection = this.parentElement.parentElement
// 		const list = paymentListSection.querySelector(".payment-list__list")

// 		const isActive = this.classList.toggle("payment-list__more--active")

// 		isActive
// 			? (this.lastChild.nodeValue = "Скрыть")
// 			: (this.lastChild.nodeValue = "Показать всё")

// 		paymentListSection.classList.toggle("payment-list--shown-list")

// 		isActive ? showItems(list) : hiddenItems(list)
// 	}

// 	if (buttonsShowMore) {
// 		optimizedResize.add(function () {
// 			const paymentLists = document.querySelectorAll(".payment-list__list")
// 			paymentLists.forEach((list) => hiddenItems(list))
// 		})
// 	}

// 	function showItems(list) {
// 		list.querySelectorAll("li").forEach((item) => {
// 			item.style.display = "block"
// 			const img = item.querySelector(".payment-list__img")

// 			if (img) {
// 				img.dataset.src ? (img.src = img.dataset.src) : 0
// 			}
// 		})
// 	}

// 	function hiddenItems(list) {
// 		if (!list.parentElement.classList.contains("payment-list--shown-list")) {
// 			const elementsList = list.querySelectorAll(".payment-list__item")
// 			if (elementsList.length != 0) {
// 				const elementsWillFit = Math.round(
// 					list.offsetWidth / (elementsList[0].offsetWidth + 40)
// 				)

// 				let maxSHow = 11

// 				if (elementsWillFit <= 3) {
// 					maxSHow = 5
// 				} else if (elementsWillFit <= 4) {
// 					maxSHow = 7
// 				} else if (elementsWillFit <= 5) {
// 					maxSHow = 9
// 				} else if (elementsWillFit <= 6) {
// 					maxSHow = 11
// 				}

// 				elementsList.forEach((item, index) =>
// 					index > maxSHow
// 						? (item.style.display = "none")
// 						: (item.style.display = "block")
// 				)
// 			}
// 		}
// 	}
// })

// // #payment-search .payment-list__list
// // #payment-search-button
// // #payment-search-input
// const btnSearch = document.querySelector("#payment-search-button")

// if (btnSearch) {
// 	btnSearch.addEventListener("click", function () {
// 		const inputSearch = document.querySelector("#payment-search-input")
// 		const paymentSearch = document.querySelector("#payment-search")
// 		const list = document.querySelector("#payment-search .payment-list__list")
// 		const items = [
// 			...document.querySelectorAll(".payment-list__list .payment-list__item"),
// 		]

// 		list ? (list.innerHTML = "") : 0

// 		if (inputSearch && inputSearch.value.length != 0) {
// 			const output = items.filter((item) =>
// 				item.dataset.providerName
// 					.toLowerCase()
// 					.includes(inputSearch.value.toLowerCase())
// 			)
// 			output.forEach((item) => {
// 				const img = item.querySelector(".payment-list__img")

// 				if (img) {
// 					img.dataset.src ? (img.src = img.dataset.src) : 0
// 				}
// 				list.appendChild(item)
// 			})

// 			output.length > 0
// 				? (paymentSearch.style.display = "block")
// 				: (paymentSearch.style.display = "none")
// 		}
// 	})
// }


