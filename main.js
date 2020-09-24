$(document).ready(function(){
    $(".se_mere").hide();
    
})
$("#se").click(function(){
    $(".se_mere").show();
})

$(function(){
$("h1").hide().fadeIn(4000);
})

$(".fa-lightbulb").hover(function(){
    $(this).css("color", "#FFD700");},
    function(){
        $(this).css("color", "#383838")
    })
