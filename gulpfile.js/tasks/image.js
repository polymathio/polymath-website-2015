var gulp            = require('gulp'),
    imagemin        = require('gulp-imagemin');

var imageTask = function(){
  gulp.src('./src/assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/assets/images/'));
};

gulp.task('image', imageTask);
module.exports = imageTask;