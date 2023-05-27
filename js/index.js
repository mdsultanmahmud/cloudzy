// working with payment quotation section 
const linuxBtn = document.getElementById("linux")
const windowsBtn = document.getElementById("windows")
const linuxContainer = document.querySelector(".linux-container")
const windowsContainer = document.querySelector(".windows-container")
linuxBtn.addEventListener("click", function () {
    // handle button
    this.classList.add("active")
    windowsBtn.classList.remove("active")
    // handle container showing
    linuxContainer.style.display = "grid"
    windowsContainer.style.display = "none"
})
windowsBtn.addEventListener("click", function () {
    // handle button
    this.classList.add("active")
    linuxBtn.classList.remove("active")

    // handle container showing
    linuxContainer.style.display = "none"
    windowsContainer.style.display = "grid"
})


// working with vps hosting solutions page 

const accordiansContainer = document.querySelectorAll(".items-container")

accordiansContainer.forEach(accordian => {
    // console.log(accordian.classList.contains("active"))
    accordian.addEventListener("click", function () {
        accordian.classList.toggle("active")
    })
})


var swiper = new Swiper(".slide-content", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



// working with payment quotation section 
const blogBtn = document.getElementById("blogBtn")
const knowledgeBtn = document.getElementById("knowledgeBtn")
const blogContainer = document.querySelector(".blog-container")
const knowledgeContainer = document.querySelector(".knowledge-container")
blogBtn.addEventListener("click", function () {
    // handle button
    this.classList.add("active")
    knowledgeBtn.classList.remove("active")

    // handle container showing
    blogContainer.style.display = "block"
    knowledgeContainer.style.display = "none"
})
knowledgeBtn.addEventListener("click", function () {
    // handle button
    this.classList.add("active")
    blogBtn.classList.remove("active")

    // handle container showing
    knowledgeContainer.style.display =  "block"
    blogContainer.style.display = "none"
})

var swiperTwo = new Swiper(".card-content", {
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