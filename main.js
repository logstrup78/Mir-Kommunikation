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

$(document).ready(function(){
    $(".hjemmesider").hide();
    
})
$(".klik2").click(function(){
    $(".hjemmesider").toggle();
})

$(document).ready(function(){
    $(".markedsføring").hide();
    
})
$(".klik3").click(function(){
    $(".markedsføring").toggle();
})

$(document).ready(function(){
    $(".korrektur").hide();
    
})
$(".klik4").click(function(){
    $(".korrektur").toggle();
})



    $("#collapse_target").on('show.bs.collapse', function() {
        $('a.nav-link').click(function() {
            $("#collapse_target").collapse('hide');
        });
    });