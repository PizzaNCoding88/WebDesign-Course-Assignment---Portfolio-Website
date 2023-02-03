//SIDEBAR

const hamburger = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-xmark");
const overlay = document.querySelector(".overlay");
const navMenu = document.querySelector(".header-navigation-menu")

hamburger.addEventListener("click", openSideBar);
closeMenu.addEventListener("click", closeSideBar);
overlay.addEventListener("click", closeSideBar);

function openSideBar(){
    if(!navMenu.classList.contains("open")){
        navMenu.classList.add("open");
        overlay.classList.add("active");
    }
}

function closeSideBar(){
    if(navMenu.classList.contains("open")){
        navMenu.classList.remove("open");
        overlay.classList.remove("active");
    }
}