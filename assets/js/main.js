const menuBtn = document.querySelector(".fa-bars");


menuBtn.addEventListener("click", function () {
    document.querySelector(".navbar__menu").classList.toggle("navbar__menu--show");
});



const faq = document.querySelectorAll(".faq__item");
function faqClearNew() {
    faq.forEach(item => {
        item.classList.remove("active");
    });
}

faq.forEach(item => {
    item.addEventListener('click', event => {
        const classListveri = event.target.classList;
        if (classListveri.contains("faq__item")) {
            classListveri.toggle("active");
            if (event.target.children[0].children[0].classList.contains("fa-minus")) {
                event.target.children[0].children[0].classList.replace("fa-minus", "fa-plus");
            } else {
                event.target.children[0].children[0].classList.replace("fa-plus", "fa-minus");
            }
        } else {
            event.target.parentNode.classList.toggle("active");

            if (event.target.children[0].classList.contains("fa-minus")) {
                event.target.children[0].classList.replace("fa-minus", "fa-plus");
            } else {
                event.target.children[0].classList.replace("fa-plus", "fa-minus");
            }
        }
    });
});



const nextBtn = document.querySelector("button.next");
const previousBtn = document.querySelector("button.previous");
const testimonials = document.querySelectorAll(".testimonials__item");
const testimonials_count = testimonials.length - 1;
var active_element = 0;

function testimonialsClearNew() {
    testimonials.forEach(item => {
        item.classList.remove("active");
    });
}
nextBtn.addEventListener("click", function () {
    active_element = ++active_element;
    if (active_element === testimonials_count) {
        //console.log(nextBtn);
        nextBtn.classList.remove("active");
        nextBtn.classList.add("notactive");
        nextBtn.setAttribute("disabled", "");
    } else {
        previousBtn.classList.remove("notactive");
        previousBtn.classList.add("active");
        previousBtn.removeAttribute("disabled");
    }
    if (active_element > testimonials_count) {
        return false;
    }
    testimonialsClearNew();
    testimonials[active_element].classList.add("active");
});
previousBtn.addEventListener("click", function () {
    active_element = --active_element;
    if (active_element === 0) {
        previousBtn.classList.remove("active");
        previousBtn.classList.add("notactive");
        previousBtn.setAttribute("disabled", "");
    } else {
        nextBtn.classList.remove("notactive");
        nextBtn.classList.add("active");
        nextBtn.removeAttribute("disabled");
    }
    if (active_element > testimonials_count) {
        return false;
    }

    testimonialsClearNew();
    testimonials[active_element].classList.add("active");

});




const tabMenu = document.querySelectorAll('.price__tab-menu a');

function clear() {
    tabMenu.forEach(item => {
        item.classList.remove("btn", "price__link--active");
        document.querySelector("#" + item.getAttribute("data-tab")).classList.remove('price__tab-item--active');
    });
}

tabMenu.forEach(item => {
    item.addEventListener('click', event => {
        //handle click
        if (event.target.className !== "btn price__link--active") {
            clear();
            event.target.classList.add("btn", "price__link--active");
            document.getElementById(event.target.dataset.tab).classList.add("price__tab-item--active");
        }
    });
});

