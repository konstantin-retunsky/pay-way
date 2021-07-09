const popupCloses = document.querySelectorAll(".popup__close");
const popupRegistration = document.querySelector("#popup-registration");
const popupLogin = document.querySelector("#popup-login");
const submitRegistration = popupRegistration.querySelector(
	"button[type=submit]"
);
const submitLogin = popupLogin.querySelector("button[type=submit]");


const popups = document.querySelectorAll(".popup");

if (popups) {
	popups.forEach((popup) => {
		popup.addEventListener("click", function (event) {
			if (event.target.dataset.close) {
				popup.classList.add("popup--close");
				setTimeout(() => {
					popup.classList.remove("popup--open");
					popup.classList.remove("popup--close");
				}, 600);
			}
		});
	});
}

const introButton = document.querySelector(".intro__button[type=submit]");

if (introButton) {
	introButton.addEventListener("click", function (e) {
		e.preventDefault();
		const introPhone = document.querySelector(".intro__phone");

		if (introPhone) {
			popupRegistration && introPhone.value != ""
				? (popupRegistration.querySelector("input[type=tel]").value =
						introPhone.value)
				: 0;
		}

		if (popupRegistration) {
			popupRegistration.classList.add("popup--open");
			popupRegistration.querySelector("input[type=password]").focus();
		}
	});
}

if (submitRegistration) {
	submitRegistration.addEventListener("click", function (e) {
		e.preventDefault();
		const telRegistration = popupRegistration.querySelector("input[name=tel]");
		const passwordRegistration = popupRegistration.querySelector(
			"input[name=password]"
		);
		const termsRegistration =
			popupRegistration.querySelector("input[name=terms]");

		if (telRegistration.value == "" || passwordRegistration.value == "") {
			alert("Заполните поля");
			return;
		}

		if (termsRegistration && !termsRegistration.checked) {
			alert("Регистрация возможна только при принятии соглашения");
			return;
		}

		//ajax
		if (telRegistration && passwordRegistration) {
			const telLogin = popupLogin.querySelector("input[name=tel]");
			const passwordLogin = popupLogin.querySelector("input[name=password]");

			telLogin ? (telLogin.value = telRegistration.value) : "";
			passwordLogin ? (passwordLogin.value = passwordRegistration.value) : "";
		}

		popupRegistration.classList.remove("popup--open");
		popupLogin.classList.add("popup--open");
		popupLogin.querySelector(".popup__code").focus();
	});
}

if (submitLogin) {
	submitLogin.addEventListener("click", function (e) {
		e.preventDefault();

		const codeLogin = popupLogin.querySelector("input[name=code]");
		const telLogin = popupLogin.querySelector("input[name=tel]");
		const passwordLogin = popupLogin.querySelector("input[name=password]");

		if (
			telLogin.value == "" ||
			passwordLogin.value == "" ||
			codeLogin.value == ""
		) {
			alert("Заполните поля");
			return;
		}

		popupLogin.classList.remove("popup--open");
	});
}

