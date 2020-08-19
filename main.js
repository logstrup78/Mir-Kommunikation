$(document).ready(function () {
    function checkOffset() {
        $(".navbar").addClass("collapse");
    }
    // Run function when scrolling
    $(window).scroll(function () {
        checkOffset();
    });
});