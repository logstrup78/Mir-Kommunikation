//*folde ud *//
$(document).ready(function(){
    $(".temaserier").hide();
    
})
$(".klik").click(function(){
    $(".temaserier").toggle();
})

$(document).ready(function(){
    $(".portrætinterviews").hide();
    
})
$(".klik1").click(function(){
    $(".portrætinterviews").toggle();
})



$(function(){
$("h1").hide().fadeIn(4000);
})

$(".fa-lightbulb").hover(function(){
    $(this).css("color", "#FFD700");},
    function(){
        $(this).css("color", "#383838")
    })

    $("#collapse_target").on('show.bs.collapse', function() {
        $('a.nav-link').click(function() {
            $("#collapse_target").collapse('hide');
        });
    });