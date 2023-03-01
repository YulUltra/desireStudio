"use strict";

var _require = require("gulp"),
    src = _require.src,
    dest = _require.dest,
    watch = _require.watch,
    parallel = _require.parallel,
    series = _require.series;

var scss = require("gulp-sass");

var concat = require("gulp-concat");

var browserSync = require("browser-sync").create();

var uglify = require("gulp-uglify-es")["default"];

var autoprefixer = require("gulp-autoprefixer");

var imagemin = require("gulp-imagemin");

var del = require("del");

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
}

function cleanDist() {
  return del("dist");
}

function images() {
  return src("app/images/**/*").pipe(imagemin([imagemin.gifsicle({
    interlaced: true
  }), imagemin.mozjpeg({
    quality: 75,
    progressive: true
  }), imagemin.optipng({
    optimizationLevel: 5
  }), imagemin.svgo({
    plugins: [{
      removeViewBox: true
    }, {
      cleanupIDs: false
    }]
  })])).pipe(dest("dist/images"));
}

function scripts() {
  return src(["node_modules/jquery/dist/jquery.js", "node_modules/slick-carousel/slick/slick.js", "node_modules/mixitup/dist/mixitup.js", "app/js/main.js"]).pipe(concat("main.min.js")).pipe(uglify()).pipe(dest("app/js")).pipe(browserSync.stream());
}

function styles() {
  return src("app/scss/style.scss").pipe(scss({
    outputStyle: "compressed"
  })).pipe(concat("style.min.css")).pipe(autoprefixer({
    overrideBrowserslist: ["last 10 version"],
    grid: true
  })).pipe(dest("app/css")).pipe(browserSync.stream());
}

function build() {
  return src(["app/css/style.min.css", "app/fonts/**/*", "app/js/main.min.js", "app/*.html"], {
    base: "app"
  }).pipe(dest("dist"));
}

function watching() {
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
  watch(["app/*.html"]).on("change", browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, build);
exports["default"] = parallel(styles, scripts, browsersync, watching);