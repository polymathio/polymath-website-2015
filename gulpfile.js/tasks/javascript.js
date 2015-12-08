var gulp            = require('gulp'),
    uglify          = require('gulp-uglify'),
    gutil           = require('gulp-util'),
    webpack         = require('webpack'),
    rename          = require('gulp-rename');

var javascriptTask = function (callback) {
  webpack({
    // context: "./src/assets/js", process.env.PWD
    context: process.env.PWD,
    entry: "./src/assets/js/entry",
    output: {
        path: "./dist/assets/js",
        filename: "bundle.js"
    },
    module: {
      loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['es2015'],
              cacheDirectory: true
            }
          }
      ]  
    },
    resolve: {
      extensions: ['', '.json', '.jsx', '.js']
    }
  }, function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      gutil.log("[Webpack]", stats.toString({
          // output options
          chunks: false
      }));

      callback();

      gulp.src('./dist/assets/js/bundle.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min' }))
        .pipe(gulp.dest('./dist/assets/js/'));
  });
};

gulp.task('javascript', javascriptTask);
module.exports = javascriptTask;