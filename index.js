'use strict'

module.exports = function(gulp, src){

    var gulp   = require('gulp');
    var jshint = require('gulp-jshint');

    gulp.task('jshint', function(){
        console.log('Running JSHint');
        gulp
            .src(src)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-smart'));
    });
};