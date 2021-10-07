const botaoMenu = document.querySelector("#header");
const menu = document.querySelector(".toggle-menu");

botaoMenu.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.toggle("#menu");
    if (menu.classList.contains("#menu")) {
        botaoMenu.innerHTML = "Fechar &times;";
    } else {
        botaoMenu.innerHTML = "Menu &equiv;";
    }
});