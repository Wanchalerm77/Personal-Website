
var particleJS = require("particles.js");


$(".nav-toggle").hover(function()  {
  $(this).addClass("jello");
}, function() {
    $(this).removeClass("jello");
});


//particle
/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
