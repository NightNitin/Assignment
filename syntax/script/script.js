const hamburger = document.querySelector(".hamburger");
const navbarLeft = document.querySelector(".navbarLeft");
const crossHome = document.querySelector(".crossHome");
const navbarRight = document.querySelector(".navbarRight");
hamburger.addEventListener("click", () => {
    navbarLeft.classList.toggle("active");
    navbarRight.classList.toggle("active");
});
crossHome.addEventListener("click", () =>{
    navbarLeft.classList.toggle("active");
    navbarRight.classList.toggle("active");
});
navbarRight.addEventListener("click", () =>{
    navbarLeft.classList.toggle("active");
    navbarRight.classList.toggle("active");
});