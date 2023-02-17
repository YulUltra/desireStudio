"use strict";

$(function () {
  $(".header_btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu_close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });
});