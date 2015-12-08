var gulp            = require('gulp'),
    browserSync     = require('browser-sync').create(),
    sass            = require('gulp-ruby-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    minifycss       = require('gulp-minify-css'),
    rename          = require('gulp-rename');

var cssTask = function() {
  return sass('./src/assets/css/scss/', { 
    style: 'expanded', 
    sourcemap: false 
  })
    .on('error', function(err) {
        notify.onError({
            title: 'Sass Error!',
            message: '<%= error.message %>',
            sound: 'Basso'
        })(err);
    })
    .pipe(autoprefixer())
    .pipe(gulp.dest('./src/assets/css'))
    .pipe(minifycss({ keepSpecialComments: 0 }))
    .pipe(rename({suffix: '.min' }))
    .pipe(gulp.dest('./dist/assets/css/'))
    .pipe(browserSync.stream());
}

gulp.task('css', cssTask);
module.exports = cssTask;