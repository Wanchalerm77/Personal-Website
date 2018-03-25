


$(".nav-toggle").hover(function()  {
  $(this).addClass("jello");
}, function() {
    $(this).removeClass("jello");
});
//curtain

$(document).on("load",() => {
  $("#curtain").animate({
    height: 0
  },1500);
});
