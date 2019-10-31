window.onload = function() {
  new WOW().init();

  window.addEventListener("scroll", function() {
    if (window.scrollY > document.querySelector("header").offsetHeight) {
      document.querySelector("header").classList.add("scroll");
    } else {
      document.querySelector("header").classList.remove("scroll");
    }
  });
};
