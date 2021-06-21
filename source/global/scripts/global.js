function getDirection() {
	let windowWidth = window.innerWidth;
	let direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

	return direction;
}
