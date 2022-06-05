let button = document.querySelector(".js-button");
let icons = document.querySelector(".js-icons");
let buttonText = document.querySelector(".js-buttonText");

button.addEventListener("click", () => {
    icons.classList.toggle("header__hideIcons");
    buttonText.innerText === "Show" ? buttonText.innerText = "Hide" : buttonText.innerText = "Show";
})