$(document).ready(function() {
  $(".hambur").click(function() {
    $("#menu-toggle").toggle();
  });
  $(window).scroll(function() {
    if ($(windown).scrollTop() != 0) {
      $("#btt").fadeIn();
    } else {
      $("#btt").fadeOut();
    }
  });
  $("#btt").click(function() {
    $("html,body").animate({ scrollTop: 0 }, 2000);
  });
  $("#carousel-book").slick({
    arrows: false,
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    slideToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});

