// NAVIGATION

var page_isolated = false;



$( "#projectslink, #projectslink2" ).on('click', function() {
    $('#projectssection').delay(800).fadeIn();
    $('.bottom-section').hide();
    $('.bottom-section').delay(800).fadeIn();
    $('#aboutsection').fadeOut();
    $('#contactsection').fadeOut();
    $('.workcategories').hide(500);
    $('.introcontent').hide(500);
    $('.introcontent2').hide(500);
    $('#heading_sticker1').delay(1000).fadeIn();
    $('#heading_sticker2').fadeOut();
    $('#heading_sticker3').fadeOut();
    page_isolated = true;
    $('.section_wrapper').css('padding-top', '50px');
});

$( "#aboutlink, #aboutlink2" ).on('click', function() {
    $('#projectssection').fadeOut();
    $('.bottom-section').hide();
    $('.bottom-section').delay(800).fadeIn();
    $('#contactsection').fadeOut();
    $('#aboutsection').delay(800).fadeIn();
    $('.workcategories').hide(500);
    $('.introcontent').hide(500);
    $('.introcontent2').hide(500);
    $('#heading_sticker1').fadeOut();
    $('#heading_sticker2').delay(1000).fadeIn();
    $('#heading_sticker3').fadeOut();
    page_isolated = true;
    $('.section_wrapper').css('padding-top', '50px');
});

$( "#contactlink, #contactlink2" ).on('click', function() {
    $('#contactsection').delay(800).fadeIn();
    $('.bottom-section').hide();
    $('.bottom-section').delay(800).fadeIn();
    $('#projectssection').fadeOut();
    $('#aboutsection').fadeOut();
    $('.workcategories').hide(500);
    $('.introcontent').hide(500);
    $('.introcontent2').hide(500);
    $('#heading_sticker1').fadeOut();
    $('#heading_sticker2').fadeOut();
    $('#heading_sticker3').delay(1000).fadeIn();
    page_isolated = true;
    $('.section_wrapper').css('padding-top', '50px');
});

$( "#homelink" ).on('click', function() {
    $('#projectssection').delay(400).show(500);
    $('#aboutsection').delay(400).show(500);;
    $('#contactsection').delay(400).show(500);
    $('.workcategories').show(500);
    $('.introcontent').hide();
    $('.introcontent2').show(500);
    $('#heading_sticker1').show();
    $('#heading_sticker2').show();
    $('#heading_sticker3').show();
    page_isolated = false;
    $('.section_wrapper').css('padding-top', '76px');
});

// Set up listeners for screen size

// var x = window.matchMedia("(max-width: 599px)")
// screenSm(x) // Call listener function at run time
// x.addListener(screenSm) // Attach listener function on state changes
//
// var y = window.matchMedia("(min-width: 600px)")
// screenLg(y) // Call listener function at run time
// y.addListener(screenLg) // Attach listener function on state changes
//
// // Nav changes for large screens
//
// function screenLg(y) {
//     if (y.matches) {
//       $('.rightmenu').css("right", '0').show();
//       $('.hamburger').hide();
//     }
// }

// Nav changes for small screens

// function screenSm(x) {
//     if (x.matches) {
//       $('.hamburger').show();
//       $('.rightmenu').css("right", '-30%');  // resets the position of the menu on state change of screen width
//   }
// }

// Animate menu in from right side when on small screens

$(document).on('click', '.menurightitem', function() {
      // $('.rightmenu').show();
      // if (x.matches){
        $('.rightmenu_mobile').animate({"width": '0%'});
        // return false;
});

// animate menu out of view screen for small screens

$(document).on( "click touchend", ".hamburger", function() {
  // $('.rightwrapper').animate({"left": '+=10%'}, "med" );
  $('.rightmenu_mobile').delay(400).animate({"width": '15%'}, "fast");
});


// Scroll magic stuff

// Intro work category icons fade on scroll down

var controller = new ScrollMagic.Controller();

// build scene

var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: 40})
        // trigger a velocity opacity animation
        .setVelocity("#animate1", {opacity: 0}, {duration: 600})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", offset: 90})
        // trigger a velocity opaticy animation
        .setVelocity("#animate2", {opacity: 0}, {duration: 600})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", offset: 140})
        // trigger a velocity opaticy animation
        .setVelocity("#animate3", {opacity: 0}, {duration: 600})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);



var scene = new ScrollMagic.Scene({triggerElement: "#trigger4",offset: 800})
				.setClassToggle("#animate4", "kill")
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger6",offset: 800})
				.setClassToggle("#animate6", "fix")
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller);




// Sticky headers



window.addEventListener('scroll', function() {

    if (page_isolated == false){

     var header1 = document.getElementById('heading_sticker1');
     var distanceToTopProject = header1.getBoundingClientRect().top;

     var header2 = document.getElementById('heading_sticker2');
     var distanceToTopAbout = header2.getBoundingClientRect().top;


     var header3 = document.getElementById('heading_sticker3');
     var distanceToTopContact = header3.getBoundingClientRect().top;

       if (distanceToTopProject < 0){
         $('#project_stick').addClass('sticky');
         $('#projectssection').addClass('padme');
       }
       else {
         $('#project_stick').removeClass('sticky');
         $('#projectssection').removeClass('padme');
       }
       if (distanceToTopAbout < 0){
         $('#about_stick').addClass('sticky');
         $('#aboutsection').addClass('padme');
       }
       else {
         $('#about_stick').removeClass('sticky');
         $('#aboutsection').removeClass('padme');
       }
       if (distanceToTopContact < 0){
         $('#contact_stick').addClass('sticky');
         $('#contactsection').addClass('padme');
       }
       else {
         $('#contact_stick').removeClass('sticky');
         $('#contactsection').removeClass('padme');
       }
     }
  });



// Skills table animate1
window.addEventListener('scroll', function() {

  var skills_table = document.getElementById('skills_table');
  var distanceToTopSkillsTable = skills_table.getBoundingClientRect().top;

  if (distanceToTopSkillsTable < 600){
      $("#html5").animate({width: '90%'});
      $("#css").delay(100).animate({width: '86%'});
      $("#ruby").delay(200).animate({width: '65%'});
      $("#jQuery").delay(300).animate({width: '90%'});
      $("#javascript").delay(400).animate({width: '50%'});
      $("#adobe").delay(500).animate({width: '60%'});
    }
});


// Smooth scrolling

var $root = $('html, body');
          $('.workcategories a').click(function() {
            var href = $.attr(this, 'href');
            if (href != undefined && href != '#') {
              $root.animate({
                scrollTop: $(href).offset().top
              }, 500, function () {
                window.location.hash = href;
              });
            }
            return false;
          });

// COPY TO CLIPBOARD

function copyClipboard() {
  var copyText = document.getElementById("myEmail");
  copyText.select();
  document.execCommand("copy");
  alert("Copied to clipboard. Now email me.");
}


// Slideshow
// $(document).ready(function(){
//   $('#movieappcarousel, #windowsandwallscarousel').carousel();
// })

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
