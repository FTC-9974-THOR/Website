$(document).ready(function () {
    var currentSlide = 0;
    var slideElements = $(".slide")
    for (var i = 1; i < slideElements.length; i++) {
        $(slideElements[i]).hide()
    }
    function advanceSlides() {
        nextSlide = (currentSlide + 1) % slideElements.length
        console.log("Current: " + currentSlide + " Next: " + nextSlide)
        $(slideElements[currentSlide]).fadeOut()
        $(slideElements[nextSlide]).fadeIn()
        currentSlide = nextSlide
    }
    var interval = window.setInterval(advanceSlides, 5000)
})
