var browserSync = require('browser-sync').create();
var gulp = require('gulp');

var serveTask = function() {
  browserSync.init({
      server: {
          baseDir: "dist/"
      },
      ghostMode: {
          clicks: false,
          forms: false,
          scroll: false
      },
      files: './dist/assets/css/*.css',
      notify: false,
      open: "external"
  });

  gulp.watch('./dist/*.html').on('change', browserSync.reload);
  gulp.watch('./dist/assets/js/*.js').on('change', browserSync.reload);
}

gulp.task('serve', ['css'], serveTask);
module.exports = serveTask;