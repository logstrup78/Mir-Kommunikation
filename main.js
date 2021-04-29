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

    
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}