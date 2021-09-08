jQuery(document).ready(function ($) {
  "use strict";

  // Page loading animation

  $("#preloader").animate(
    {
      opacity: "0",
    },
    600,
    function () {
      setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    }
  );

  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    const header = $("header").height();
    const containsBoxHeader = $("header").hasClass("box-header");

    if (scroll >= header * 3.5) {
      $("header").addClass("background-header");
      $(".navbar-brand .img-fluid").attr(
        "src",
        "./../../public/images/logo_colorida.png"
      );
    } else {
      $("header").removeClass("background-header");
      if (!containsBoxHeader) {
        $(".navbar-brand .img-fluid").attr(
          "src",
          "./../../public/images/logo_branca.png"
        );
      }
    }
  });
});
