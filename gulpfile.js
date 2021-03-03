const gulp = require("gulp"),
      cleanCSS = require("gulp-clean-css"),
      sourcemaps = require("gulp-sourcemaps"),
      concat = require("gulp-concat"),
      uglify = require("gulp-uglify");

const js  = 'public/js/',
      css =  'public/css/';

const jsSrc = [
      js + 'angular.js',
      js + 'angular-touch.js',
      js + 'ui-grid.js'
];
function javascript(){
  return gulp.src(jsSrc)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
}
function cssMinify() {
  return gulp.src(css + '*.css')
    .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css/'));
}
function watch(){
  gulp.watch(jsSrc, javascript);
  gulp.watch(css+'*.css', cssMinify);
  gulp.watch(['build/js/main.js','build/css/*.css']);
}

exports.javascript = javascript;
exports.watch = watch;

const build = gulp.series(watch);
gulp.task('default',build);