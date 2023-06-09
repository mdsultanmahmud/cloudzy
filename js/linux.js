// working with payment quotation section 
const supersonicBtn = document.getElementById("supersonic")
const hypersonicBtn = document.getElementById("hypersonic")
const supersonicContainer = document.querySelector(".supersonic-container")
const hypersonicContainer = document.querySelector(".hypersonic-container")
supersonicBtn.addEventListener("click", function () {
    // handle button
    this.classList.add("active")
    hypersonicBtn.classList.remove("active")
    // handle container showing
    supersonicContainer.style.display = "grid"
    hypersonicContainer.style.display = "none"
})
hypersonicBtn.addEventListener("click", function () {
    // handle button
    this.classList.add("active")
    supersonicBtn.classList.remove("active")

    // handle container showing
    supersonicContainer.style.display = "none"
    hypersonicContainer.style.display = "grid"
})

// working with why choose linux and faq accordian

const accordiansContainer = document.querySelectorAll(".items-container")

accordiansContainer.forEach(accordian => {
    
    accordian.addEventListener("click", function () {
        accordian.classList.toggle("active")
    })
})


// user commennt slider 
var swiper = new Swiper(".slide-content", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// user commennt slider 
var swiperOfFavSec = new Swiper(".card-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    fade:"true",
    grabCursor:"true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        }
    }
});



const linksContainer = document.querySelectorAll(".link-container")
linksContainer.forEach(link => {
    console.log(link)
    link.addEventListener("click", function(){
        this.classList.toggle("active")
    })
})


