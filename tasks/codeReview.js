'use strict';

module.exports = function(gulp, src){

    var jshint = require('gulp-jshint');

    gulp.task('jshint', function(){
        console.log('Running JSHint');
        return gulp
            .src(src)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
    });
};