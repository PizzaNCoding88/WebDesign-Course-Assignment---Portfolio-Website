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

const designSection = document.querySelector("#design-section");
const devSection = document.querySelector("#dev-section");

skillsSelectorBoxLeft.addEventListener("click", activeSelectorLeft);
skillsSelectorBoxRight.addEventListener("click", activeSelectorRight);

function activeSelectorLeft(){
    if(!skillsSelectorBoxLeft.classList.contains("activeSelector")){
        skillsSelectorBoxLeft.classList.add("activeSelector");
        devSection.classList.add("dsp-no");
        designSection.classList.remove("dsp-no");
        skillsSelectorBoxRight.classList.remove("activeSelector");
    }else{
        skillsSelectorBoxLeft.classList.remove("activeSelector");
    }
}

function activeSelectorRight(){
    if(!skillsSelectorBoxRight.classList.contains("activeSelector")){
        skillsSelectorBoxRight.classList.add("activeSelector");
        designSection.classList.add("dsp-no");
        devSection.classList.remove("dsp-no");
        skillsSelectorBoxLeft.classList.remove("activeSelector")
    }else{
        skillsSelectorBoxRight.classList.remove("activeSelector");
    }
}

