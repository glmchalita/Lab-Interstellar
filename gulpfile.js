const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");

function compile_sass() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

function compress_img() {
  return gulp.src("./src/images/**/*").pipe(imagemin()).pipe(gulp.dest("./dist/images"));
}

function compress_js() {
  return gulp.src("./src/scripts/*.js").pipe(uglify()).pipe(obfuscate()).pipe(gulp.dest("./dist/scripts"));
}

exports.default = gulp.parallel(compile_sass, compress_img, compress_js);
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(compile_sass));
  gulp.watch("./src/scripts/*.js", gulp.parallel(compress_js));
};
