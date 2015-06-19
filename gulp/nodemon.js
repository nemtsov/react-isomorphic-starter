var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

exports.start = start;

function start() {
  var config = {
    script: 'server.js',
    watch: [
      'server.js',
      'lib/app.js',
      'lib/flux/**/*.js',
      'lib/resources/**/*.js',
      'dist/**/*.js'
    ]
  };
  return nodemon(config);
}
