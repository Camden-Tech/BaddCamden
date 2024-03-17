var targets = document.querySelectorAll('[parallax]'); 
document.getElementById("scrollable").onscroll = function() {  
  var scrolltotop = document.scrollingElement.scrollTop;
  // Select all elements with the "parallax" attribute
  var xvalue = "0px";

  targets.forEach(function(target) {
    var factor = parseFloat(target.getAttribute("parallax")); // Get the "parallax" attribute as a number
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
  });
}
