$(function () {
  $(".header_btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu_closerightside").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });
  $(".top_slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });

  $(".contact-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 8,
  });

  $(".article_slider-box").slick({
    prevArrow:
      '<button type="button" class="article_slider_arrow article_slider_arrowleft"> <img src="images/left.svg" alt="arrow left"></button>',
    nextArrow:
      '<button type="button" class="article_slider_arrow article_slider_arrowright"> <img src="images/right.png" alt="arrow right"></button>',
  });

  var mixer = mixitup(".gallery_inner", {
    load: {
      filter: ".category-living",
    },
  });
});
