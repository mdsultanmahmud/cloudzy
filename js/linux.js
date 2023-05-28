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



// user commennt slider 
var swiper = new Swiper(".slide-content", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



const linksContainer = document.querySelectorAll(".link-container")
linksContainer.forEach(link => {
    console.log(link)
    link.addEventListener("click", function(){
        this.classList.toggle("active")
    })
})


