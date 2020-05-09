const hideNav = document.querySelector(".navigation__nav");
const navBtn = document.querySelector(".navigation__button");
const popup = document.querySelector(".popup");
const cardBlock = document.querySelector(".section-tours");

navBtn.addEventListener("click", () => {
    if ((hideNav.style.display = "none")) {
        hideNav.style.display = "block";
    } else {
        hideNav.style.display = "none";
    }
});

cardBlock.addEventListener("mouseover", () => {
    popup.style.display = "block";
});
