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

  var mixer = mixitup(".gallery_inner", {
    load: {
      filter: ".category-living",
    },
  });
});
