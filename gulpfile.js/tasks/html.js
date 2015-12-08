var gulp            = require('gulp'),
    nunjucksRender  = require('gulp-nunjucks-render');

var htmlTask = function () {
  nunjucksRender.nunjucks.configure(['./src/templates/']);
  return gulp.src(['./src/templates/*.html'])
    .pipe(nunjucksRender())
    .pipe(gulp.dest('./dist/'));
}

gulp.task('html', htmlTask);
module.exports = htmlTask;