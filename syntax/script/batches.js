const navbarLeft = document.querySelector(".navbarLeft");
const navbarRight = document.querySelector(".navbarRight");
const hamburger = document.querySelector(".hamburger");
const crossHome = document.querySelector(".crossHome");
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
})