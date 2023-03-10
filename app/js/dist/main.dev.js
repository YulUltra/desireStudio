"use strict";

$(function () {
  $(".header_btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu_closerightside").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });
  $(".header_btn-menu").on("click", function () {
    $(".menu").toggleClass("menu--open");
  });

  if ($(window).width() < 651) {
    $(".works-path_item--measurements").appendTo($(".works-path_items-box"));
  }

  $(".top_slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });
  $(".contact-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [{
      breakpoint: 1511,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6
      }
    }, {
      breakpoint: 1180,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 841,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 551,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
  $(".article_slider-box").slick({
    prevArrow: '<button type="button" class="article_slider_arrow article_slider_arrowleft"> <img src="images/left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="article_slider_arrow article_slider_arrowright"> <img src="images/right.png" alt="arrow right"></button>'
  });
  var mixer = mixitup(".gallery_inner", {
    load: {
      filter: ".category-living"
    }
  });
});