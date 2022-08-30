// NAVBAR MOBILE RESPONSIVE

let hamburger = document.querySelector(".navbar-toggler");
let navMenu = document.querySelector(".collapse");



document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("show");
}))


// END
