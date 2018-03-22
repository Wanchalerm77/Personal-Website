const gulp = require('gulp');
const sass = require("gulp-sass");







gulp.task("sass", () => {
  return gulp.src("./public/sass/main.sass")
  .pipe(sass())
  .pipe(gulp.dest("./public"));

});














gulp.task("default", ["sass"], () => {
  console.log("GulpJS started");
});
