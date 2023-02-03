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

//SKILLS SELECTOR

const skillSelectorIconLeft = document.querySelector("#skill-selector-icon-left");
const skillSelectorIconRight = document.querySelector("#skill-selector-icon-right");

const skillsSelectorBoxLeft = document.querySelector("#skills__selector__box-left");
const skillsSelectorBoxRight = document.querySelector("#skills__selector__box-right");


function hooverOnLeft(){
    skillsSelectorBoxLeft.style.background = "black";
    skillSelectorIconLeft.src = `https://img.icons8.com/ios/50/null/FFFFFF/roller-brush--v1.png`
}

function hooverOffLeft(){
    skillsSelectorBoxLeft.style.background = "transparent";
    skillSelectorIconLeft.src = `https://img.icons8.com/ios/50/null/roller-brush--v1.png`
}

function hooverOnRight(){
    skillsSelectorBoxRight.style.background = "black";
    skillSelectorIconRight.src = `https://img.icons8.com/ios/50/null/FFFFFF/source-code.png`
}

function hooverOffRight(){
    skillsSelectorBoxRight.style.background = "transparent";
    skillSelectorIconRight.src = `https://img.icons8.com/ios/50/null/source-code.png`
}


