


$(".nav-toggle").hover(function()  {
  $(this).addClass("jello");
}, function() {
    $(this).removeClass("jello");
});
//curtain

$(window).on("load",() => {
  $("#curtain").animate({
    height: 0
  },100);
});
