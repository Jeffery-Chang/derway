window.onload = function() {
  function chkIE8() {
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; // 判斷是否IE<11瀏覽器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; // 判斷是否IE的Edge瀏覽器
    var isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      if (fIEVersion == 7) {
        return 7;
      } else if (fIEVersion == 8) {
        return 8;
      } else if (fIEVersion == 9) {
        return 9;
      } else if (fIEVersion == 10) {
        return 10;
      } else {
        return 6; //IE版本 <= 7
      }
    } else if (isEdge) {
      return 12; // edge
    } else if (isIE11) {
      return 11; // IE11
    } else {
      return 13; // 不是ie瀏覽器
    }
  }

  if (chkIE8() <= 10) {
    location.href = "index_ie.html";
    return;
  }

  new WOW().init();

  var logo = document.querySelector("header .logo img") ? document.querySelector("header .logo img").getAttribute("src") : null;

  // 2020-01-06 修正IE11捲軸問題
  window.addEventListener("scroll", () => {
    var offsetY = window.scrollY || document.documentElement.scrollTop;
    if (offsetY > document.querySelector("header").offsetHeight) {
      document.querySelector("header").classList.add("scroll");
      document.querySelector("header .logo img").setAttribute("src", "img/logo_w.svg");
    } else {
      document.querySelector("header").classList.remove("scroll");
      document.querySelector("header .logo img").setAttribute("src", logo);
    }
  });
};
