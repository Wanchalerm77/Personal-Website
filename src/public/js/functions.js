// typing animation
var typed = new Typed("#typed", {
  strings: ["Hi, I'm Wanchalerm ^500", "A Student With A Passion For Web Design"],
  typeSpeed:40,
  startDelay: 1000,
  fadeOut: true

});
// toggle navbar animation

var hidden = true;
$(".nav-toggle").click(function(event) {
  if(hidden) {
  event.preventDefault();
  $(".navbar-menu").animate({
      left: 0
  },1000);
  hidden = false;
} else {
  event.preventDefault();
  $(".navbar-menu").animate({
      left: "100vw"
  },1000);
  hidden = true;
}

});
