(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  var startyear = 2021;
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var dataCreditos = function () {
    // document.getElementById("current_date").innerHTML = month + "/" + day + "/" + year;
    document.getElementById("current_date").innerHTML = year;
	document.getElementById("start_date").innerHTML = startyear;
  };
  dataCreditos();
  var carousel = function () {
    $(".featured-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slideSpeed: 7000,
      rewindSpeed: 5000,
      margin: 30,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      items: 1,
      navText: [
        "<span class='ion-ios-arrow-back'></span>",
        "<span class='ion-ios-arrow-forward'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };
  carousel();
})(jQuery);
