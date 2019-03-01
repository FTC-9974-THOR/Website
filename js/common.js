$(document).ready(function () {
    $('a[href^="#"]').click(function (e) {
        e.preventDefault()
        $(window).stop(true).scrollTo(this.hash, { duration: 1000, interrupt: true })
    })
    // you know what, screw it.
    // i'm doing dropdowns in js, not css.
    function positionDropdown(object) {
        var offset = $(object).offset();
        $(".dropdown-container", object).css({
            "position": "fixed",
            "left": offset.left + "px",
            "width": $(object).width() + "px"
        })
    }
    $(".dropdown").each(function (index, object) {
        console.log("Processing dropdown")
        console.log(object)
        positionDropdown(object)
        setInterval(function () {
            positionDropdown(object)
        }, 200)
        $("a", object).hover(function () {
            $(".dropdown-container", object).css("display", "inline-block")
        },
        function () {
            $(".dropdown-container", object).css("display", "none")
        })
    })
});