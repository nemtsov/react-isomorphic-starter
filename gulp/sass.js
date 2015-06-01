var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  livereload = require('gulp-livereload');

exports.toCss = function (sourcePath, destFilename) {
  return sassToCss.bind(null, sourcePath, destFilename);
};

exports.toCssWatch = function (sourcePath, destFilename) {
  return sassToCssWatch.bind(null, sourcePath, destFilename);
};

function sassToCss(inputPath, destFilename) {
  return gulp.src(inputPath)
    .on('error', gutil.log.bind(gutil, 'SASS Error'))
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(livereload())
    .pipe(sourcemaps.write('./maps'))
    .pipe(rename(destFilename))
    .pipe(gulp.dest('./dist'));
}

function sassToCssWatch(inputPath, destFilename) {
  livereload.listen();
  sassToCss(inputPath, destFilename);
  return gulp.watch('./lib/components/**/*.scss',
    sassToCss.bind(null, inputPath, destFilename));
}
