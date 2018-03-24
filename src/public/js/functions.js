// typing animation
var typed = new Typed("#typed", {
  strings: ["Hi, I'm Wanchalerm ^500", "A Student With A Passion For Web Design"],
  typeSpeed: 40,
  startDelay: 1000,
  fadeOut: true

});
// toggle navbar animation

var hidden = true;
let showNavAnimation = {
  "left": "100vw"
}
let hideNavAnimation = {
  "left": "0"
}

let navbarAnimations = () => {
  $(".nav-toggle").click(function(event) {
    if (hidden) {
      event.preventDefault();
      $(".navbar-menu").animate(hideNavAnimation, 1000);
      hidden = false;
      $(".nav-toggle span:first-child").addClass("firstCross");
      $(".nav-toggle span:last-child").addClass("thirdCross");
      $(".nav-toggle span").removeClass("noCross");
      $(".nav-toggle span:nth-child(2)").css("opacity", "0");

    } else {
      event.preventDefault();
      $(".navbar-menu").animate(showNavAnimation, 1000);
      hidden = true;
      $(".nav-toggle span").addClass("noCross");
      $(".nav-toggle span:first-child").removeClass("firstCross");
      $(".nav-toggle span:last-child").removeClass("thirdCross");
      $(".nav-toggle span:nth-child(2)").css("opacity", "1");



    }
  });
};

navbarAnimations();


//hobbies gallery

var id;

let slideShow = () => {
  $(".hobby").hover(function() {
    let img = $(this).find("img");
    id = setInterval(() => {
      for (let i = 0, k = 1; i < img.length; i++) {
        $(img[i]).animate({
              "opacity": 1
            },
            1000 * k)
          .animate({
            "opacity": 0
          }, 1000);
        k += 1.5;
      }
    }, 2550)
  }, function() {
    clearInterval(id);
    let images = $(this).find("img");
    for (let img of images) {
      $(img).finish();
    }
  });
};

let onMouseEnter = () => {
    $(".hobby").mouseenter(function() {
      let images = $(this).find("img");
      for (let i = 0, k = 1; i < images.length; i++) {
        $(images[i]).animate({
          "opacity": 1
        }, 1000 * k).animate({
          "opacity": 0
        }, 1000);
        k += 1.5;
      }
    });

};
onMouseEnter();
slideShow();
