var gulp = require('gulp');

var defaultTask = ['javascript', 'html', 'image', 'watch', 'serve'];

gulp.task('default', defaultTask);
module.exports = defaultTask;