//= require _vendor/jquery.js
//= require _vendor/jquery.cookie.js
//= require _vendor/fastclick.js
//= require _vendor/modernizr.js
//= require _vendor/placeholder.js
//= require _vendor/foundation.js
//= require _vendor/fittext.js


// HERO TEXT
// Funcations run on page load
$(document).ready(autoAdjustFontSize);
$(document).ready(variableMargin);
// Dynamically adjust textsize to page width
function autoAdjustFontSize() {
  $(".title-text").fitText(1, {minFontSize: "55em", maxFontSize: "90em"});
}

// HERO ICONS
// Call variableMargin() on window resize
$(window).resize(variableMargin);
// Make social icons have variable margin
function variableMargin() {
  var windowHeight = $(window).height();
  var spacingDiv = Math.round((windowHeight/12)).toString();
  var lineHeight = parseInt(spacingDiv * 2, 10).toString();
  var fontSize = parseInt(spacingDiv * 2, 10).toString();
  if (parseInt(lineHeight, 10) < 30) {
    lineHeight = 30;
  }
  $(".social-icons").css("margin-top", spacingDiv + "px");
  $(".social-icons a").css("line-height", lineHeight + "px");
  $(".social-icons a").css("font-size", fontSize + "px");
  console.log("fontsize " + fontSize);
  console.log("lineHeight " + lineHeight);
  console.log("spacingDiv " + spacingDiv);
}

// NAVBAR
// Call stickyNav() on scroll
$(window).scroll(stickyNav);
// Make nav bar sticky
function stickyNav(){
  var scrollDistance = $("body").scrollTop();
  var heroHeight = $(".hero-photo").height();
  $(".sticky").toggleClass("sticking-nav", scrollDistance >= (heroHeight - 45));
}


