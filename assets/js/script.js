// NAVBARS
let barsText = document.querySelector(".barsText")
let menuToggle = document.querySelector(".menuToggle")
let closeNav = document.querySelector(".close-nav")
let menu = document.querySelector(".menu")

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


// QUESTIONS
let show = false
let section7Question = document.querySelectorAll(".arrow");
section7Question.forEach((question) => {
    question.addEventListener("click", function (e) {
        let answer = e.target.parentElement.parentElement.parentElement.childNodes[3];
        answer.classList.toggle("answer");
    });
});