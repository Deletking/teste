"use strict";

const gulp = require("gulp");
const concat = require("gulp-concat");
const minify = require("gulp-minify");
const cleanCss = require("gulp-clean-css");

const pathComponentsDest = "public/css/components";
const pathComponentsOrigin = "assets/css/components/";

gulp.task("pack-js", function () {
  return gulp
    .src([
      "assets/js/custom.js",
      "assets/js/owl.js",
      "assets/js/contact/contact.js",
    ])
    .pipe(concat("bundle.js"))
    .pipe(minify())
    .pipe(gulp.dest("public/js"));
});

gulp.task("pack-css", function () {
  return gulp
    .src(["assets/css/*.css"])
    .pipe(concat("styles.css"))
    .pipe(cleanCss())
    .pipe(gulp.dest("public/css"));
});

gulp.task("pack-css2", function () {
  return gulp
    .src(["assets/css2/*.css"])
    .pipe(concat("styles_2.css"))
    .pipe(cleanCss())
    .pipe(gulp.dest("public/css"));
});

gulp.task("pack-css-component-product", function () {
  return gulp
    .src([`${pathComponentsOrigin}product.css`])
    .pipe(cleanCss())
    .pipe(gulp.dest(pathComponentsDest));
});

gulp.task("pack-css-component-blog", function () {
  return gulp
    .src([`${pathComponentsOrigin}blog.css`])
    .pipe(cleanCss())
    .pipe(gulp.dest(pathComponentsDest));
});

gulp.task("pack-css-component-about", function () {
  return gulp
    .src([`${pathComponentsOrigin}about.css`])
    .pipe(cleanCss())
    .pipe(gulp.dest(pathComponentsDest));
});

gulp.task("pack-css-component-contact", function () {
  return gulp
    .src([`${pathComponentsOrigin}contact.css`])
    .pipe(cleanCss())
    .pipe(gulp.dest(pathComponentsDest));
});

gulp.task("watch", () => {
  gulp.watch("assets/**/*.js", gulp.series("pack-js"));
  gulp.watch("assets/css/*.css", gulp.series("pack-css"));
  gulp.watch("assets/css2/*.css", gulp.series("pack-css2"));
  gulp.watch(
    `${pathComponentsOrigin}/product.css`,
    gulp.series("pack-css-component-product")
  );
  gulp.watch(
    `${pathComponentsOrigin}blog.css`,
    gulp.series("pack-css-component-blog")
  );
  gulp.watch(
    `${pathComponentsOrigin}/about.css`,
    gulp.series("pack-css-component-about")
  );
  gulp.watch(
    `${pathComponentsOrigin}/contact.css`,
    gulp.series("pack-css-component-contact")
  );
});

gulp.task("default", gulp.series("watch"));