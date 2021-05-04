{
    const toggleIcons = () => {
        const icons = document.querySelector(".js-icons");
        const buttonText = document.querySelector(".js-buttonText");
        icons.classList.toggle("header__hideIcons");
        buttonText.innerText === "Show" ? buttonText.innerText = "Hide" : buttonText.innerText = "Show";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleIcons);
    };

    init();
}