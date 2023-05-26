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


var swiper = new Swiper(".slide-content", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});