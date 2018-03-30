// typing animation
var typed = new Typed("#typed", {
  strings: ["Hi, I'm Wanchalerm ^500", "A Student With A Passion For Web Design"],
  typeSpeed: 40,
  startDelay: 1600,
  fadeOut: true

});




//hobbies gallery

var id;


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




