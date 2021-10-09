const menuBtn = document.querySelector(".menu-icon");
const resMenu = document.querySelector(".responsive-nav-items");
const menuItems = document.getElementsByClassName("menu-item")

function toggleMenu() {
    if (resMenu.style.display == "flex") {
        resMenu.style.display = "none";
        return;
    }
    resMenu.style.display = "flex";
}

menuBtn.addEventListener("click", toggleMenu);
for (let item of menuItems) {
    item.addEventListener("click", toggleMenu);
}