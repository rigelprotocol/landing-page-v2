// NAVBARS
let barsText = document.querySelector(".barsText")
let menuToggle = document.querySelector(".menuToggle")
let closeNav = document.querySelector(".close-nav")
let menu = document.querySelector(".menu")
let multiNavbar = document.querySelector(".multi_navbar")
let multiNavbarUl = document.querySelector(".multi_navbar_ul")
// define eventlisteners
let navbar = false
menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active")
    navbar = !navbar

    if (navbar === true) {
        closeNav.style.display = "block"
        barsText.style.display = "none"
    } else {
        closeNav.style.display = "none"
        barsText.style.display = "block"
    }

})

multiNavbar.addEventListener("click", function () {
    multiNavbarUl.classList.toggle("active")
})

let links = document.querySelectorAll(".inner-page-link")
for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {

    menu.classList.remove("active");
    closeNav.style.display = "none"
    barsText.style.display = "block"
    const href = this.getAttribute("href");
    if (href.split("")[0] === "#") {
        e.preventDefault();
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
            top: offsetTop,
            behavior: "smooth",
        });

    }

}



