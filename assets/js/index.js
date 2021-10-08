// NAVBARS
let barsText = document.querySelector(".barsText")
let roadMaps = document.querySelector("#roadMaps")
let menuToggle = document.querySelector(".menuToggle")
let closeNav = document.querySelector(".close-nav")
let menu = document.querySelector(".menu")
let multiNavbar = document.querySelector(".multi_navbar")
let multiNavbarUl = document.querySelector(".multi_navbar_ul")

// DEADLINE
let deadline = "2021-11-21 10:00";
let daysVal = document.querySelector(".daysVal");
let hoursVal = document.querySelector(".hoursVal");
let minutesVal = document.querySelector(".minutesVal");
let secondsVal = document.querySelector(".secondsVal");
let deadlineDate = new Date(deadline);

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

const createValue = time=> {
    let days = Math.floor(time / (3600 * 24));
    let hours = Math.floor((time % (3600 * 24)) / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.floor(time % 60);
    let values = { days, hours, minutes, seconds };
    return values;
  }
  const setTimeUI = time => {
    let x = setInterval(function () {
      let now = new Date().getTime();
      let later = time.getTime();
      let timeDiff = (later - now) / 1000;
      let values = createValue(timeDiff);
      daysVal.innerHTML = values.days;
      hoursVal.innerHTML = values.hours > 9 ? values.hours : `0${values.hours}`;
      minutesVal.innerHTML =
        values.minutes > 9 ? values.minutes : `0${values.minutes}`;
      secondsVal.innerHTML =
        values.seconds > 9 ? values.seconds : `0${values.seconds}`;
    }, 1000);
  }
  
document.addEventListener("DOMContentLoaded",()=> setTimeUI(deadlineDate))

multiNavbar.addEventListener("click", function () {
    multiNavbarUl.classList.toggle("active")
})

let links = document.querySelectorAll(".inner-page-link")
for (const link of links) {
    link.addEventListener("click", clickHandler);
}
// fixed modal
let fixModalCancel= document.getElementsByClassName("fixed__modal_cancel")[0]
let page= document.getElementsByClassName("page")[0]
let fixModal= document.getElementsByClassName("fixed__modal")[0]

fixModalCancel.addEventListener("click",(e)=>{
    fixModal.style.display="none"
    page.classList.toggle("blur")
})
setTimeout(()=> {
    fixModal.style.display="block"
    page.classList.toggle("blur")
},15000)

// QUESTIONS
let show = false
let section7Question = document.querySelectorAll(".arrow");
section7Question.forEach((question) => {
    question.addEventListener("click", function (e) {
        let answer = e.target.parentElement.childNodes[3];
        answer.classList.toggle("answer");
    });
});


let section7QuestionText = document.querySelectorAll(".arrow-text");
section7QuestionText.forEach((question) => {
    question.addEventListener("click", function (e) {
        let answer = e.target.parentElement.parentElement.childNodes[3];
        answer.classList.toggle("answer");
    });
});

// let downArrow = document.querySelectorAll(".downArrow");
// downArrow.forEach((question) => {
//     question.addEventListener("click", function (e) {
//         let answer = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[3];
//         console.log(answer)
//         answer.classList.toggle("answer");
//     });
// });

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
