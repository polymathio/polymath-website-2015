var gulp = require('gulp');

var watchTask = function(){  
  gulp.watch('./src/assets/js/**/*.js',         ['javascript']);
  gulp.watch('./src/templates/**/*.html',       ['html']);
  gulp.watch('./src/assets/css/scss/**/*.scss', ['css']);
};

gulp.task('watch', watchTask);
module.exports = watchTask;