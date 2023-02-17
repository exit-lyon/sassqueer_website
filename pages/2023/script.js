function parallax(init, divider, id) {
    var star = document.getElementById(id);
    var yPos = 0 - window.pageYOffset / divider;
    star.style.top = init + yPos + "%";
  }
  
  // function parallax() {
  //   var star = document.getElementById("michel");
  //   var totalHeight = document.documentElement.scrollHeight;
  //   var windowHeight = window.innerHeight;
  //   var yPos = ((window.pageYOffset + windowHeight / 2) / totalHeight) * 100;
  //   star.style.top = yPos + "%";
  // }
  
  window.addEventListener("scroll", function () {
    parallax(50, 100, "michel");
  });
  
  window.onload = function() {
    parallax();
  }