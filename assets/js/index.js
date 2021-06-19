// NAVBARS
let barsText = document.querySelector(".barsText")
let roadMaps = document.querySelector("#roadMaps")
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

// QUESTIONS
let show = false
let section7Question = document.querySelectorAll(".arrow");
section7Question.forEach((question) => {
    question.addEventListener("click", function (e) {
        let answer = e.target.parentElement.parentElement.childNodes[3];
        answer.classList.toggle("answer");
    });
});
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
        if (offsetTop === 3004) {
            animation()
        }

    }

}
let animateOne = document.querySelectorAll(".animate_one")
let h5Text = document.querySelectorAll(".h5Text")
let pText = document.querySelectorAll(".pText")

function animation() {
    let counter = 0
    animateOne[counter].classList.add("startCircleAnimation")
    setTimeout(() => animateOne[counter].classList.add("startAnimateOne"), 300)
    let animateInterval = setInterval(() => {
        if (counter < animateOne.length - 1) {
            animateOne[counter].classList.add("startCircleAnimation")
            h5Text[counter].classList.add("h5Animation")
            pText[counter].classList.add("pAnimation")
            setTimeout(() => animateOne[counter].classList.add("startAnimateOne"), 300)
            counter += 1

        } else {
            animateOne[animateOne.length - 1].classList.add("startCircleAnimation")
            h5Text[counter].classList.add("h5Animation")
            pText[counter].classList.add("pAnimation")
            clearInterval(animateInterval)

        }
    }, 1200)
}

document.addEventListener("scroll", () => {

    if (window.scrollY > 2767 && window.scrollY < 3440) {
        animation()
    }
})
