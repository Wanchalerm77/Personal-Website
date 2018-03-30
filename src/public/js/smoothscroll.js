import "jquery-mousewheel";


var slideHelper = 1;
var disableSlideAnimation = false;
let pageAnchors = Object.freeze({
    1:"#introduction",
    2: "#personal-section",
    3:"#skills-section",
    4: "#hobbies-section",
    5: "#contact-section"
});


$(document).ready(function(){
  $("a[href*='#']").on('click', function(event) {
    if (this.hash !== "") {
     event.preventDefault();
      var hash = this.hash;
      console.log(hash);
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500);
    }
  });
});



$("html, body").animate({
    scrollTop: $(pageAnchors[1]).offset().top
},2000);


$(window).mousewheel(function(event) {

    if(event.originalEvent.wheelDelta > 0 && slideHelper > 1 && disableSlideAnimation == false) {

        slideHelper--;
        $("html, body").animate({
            scrollTop: $(pageAnchors[slideHelper]).offset().top
        },2000);
        console.log(slideHelper);
        disableSlideAnimation = true;
        setTimeout(() => {
            disableSlideAnimation = false;
        },2200)





    } else if (event.originalEvent.wheelDelta < 0 && slideHelper < 5 && disableSlideAnimation == false){

        slideHelper++;
        $("html, body").animate({
            scrollTop: $(pageAnchors[slideHelper]).offset().top
        },2000);
        disableSlideAnimation = true;
        console.log(slideHelper);

        setTimeout(() => {
            disableSlideAnimation = false;
        },2200)




    }


});


var hidden = true;
let hideNavAnimation = {
    "left": "100vw"
}
let showNavAnimation = {
    "left": "0"
}


    $(".nav-toggle").click(function(event) {
        if (hidden) {
            event.preventDefault();
            $(".navbar-menu").animate(showNavAnimation, 1000);
            hidden = false;
            $(".nav-toggle span:first-child").addClass("firstCross");
            $(".nav-toggle span:last-child").addClass("thirdCross");
            $(".nav-toggle span").removeClass("noCross");
            $(".nav-toggle span:nth-child(2)").css("opacity", "0");
            disableSlideAnimation = true;


        } else {
            event.preventDefault();
            $(".navbar-menu").animate(hideNavAnimation, 1000);
            hidden = true;
            $(".nav-toggle span").addClass("noCross");
            $(".nav-toggle span:first-child").removeClass("firstCross");
            $(".nav-toggle span:last-child").removeClass("thirdCross");
            $(".nav-toggle span:nth-child(2)").css("opacity", "1");
            disableSlideAnimation = false;




        }
    });


