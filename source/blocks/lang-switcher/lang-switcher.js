const buttonsSwitch = document.querySelectorAll(".lang-switcher__button");

if (buttonsSwitch) {
	buttonsSwitch.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const selectedLang = document.querySelector(".lang-switcher__selected");
			const cloneSelectedLang = selectedLang.cloneNode(true);

			if (selectedLang) {
				selectedLang.replaceChild(
					btn.querySelector(".lang-switcher__ico-lang").cloneNode(true),
					selectedLang.querySelector(".lang-switcher__ico-lang")
				);

				selectedLang.replaceChild(
					btn.querySelector(".lang-switcher__text").cloneNode(true),
					selectedLang.querySelector(".lang-switcher__text")
				);

				btn.replaceChild(
					cloneSelectedLang.querySelector(".lang-switcher__text"),
					btn.querySelector(".lang-switcher__text")
				);

				btn.replaceChild(
					cloneSelectedLang.querySelector(".lang-switcher__ico-lang"),
					btn.querySelector(".lang-switcher__ico-lang")
				);
			}
		});
	});
}
