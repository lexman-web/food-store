"use strict";

/* running functions */
addBurger();






/* burger menu */
function addBurger() {
	const burgerButton = document.querySelector(".menu-button"),
		burgerMenu = document.querySelector(".menu"),
		burgerLines = document.querySelectorAll(".menu-button__line");

	if (burgerButton) {
		burgerButton.addEventListener("click", () => {
			burgerButton.classList.toggle("menu-button--active");
			burgerMenu.classList.toggle("menu--open");
			document.body.classList.toggle("body--lock");

			for (let i = 0; i < burgerLines.length; i++) {
				burgerLines[i].classList.toggle("menu-button__line--active");
			}
		})
	};

	// hover for line
	burgerButton.addEventListener("mouseover", () => {
		burgerLines.forEach(element => {
			element.classList.add("menu-button__line--over")
		});
	});

	burgerButton.addEventListener("mouseout", () => {
		burgerLines.forEach(element => {
			element.classList.remove("menu-button__line--over")
		});
	});

};