'use strict';

module.exports = function(gulp, src){

    var jshint = require('gulp-jshint');
    var eslint = require('gulp-eslint');
    var jscs = require('gulp-jscs');

    gulp.task('jsHint', function(){
        console.log('Running JSHint');
        return gulp
            .src(src)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
    });

    gulp.task('esLint', function(){
        console.log("f:" + __filename);
        console.log("d:" + __dirname);
        return gulp
            .src(src)
            .pipe(eslint({
                envs: [
                    'node'
                ]
            }))
            .pipe(eslint.format());
    });

    gulp.task('jscs', function() {
        console.log(src);
        return gulp
            .src(src)
            //.pipe(gUtil.GP.if(gUtil.args.verbose, gUtil.GP.print()))
            .pipe(jscs({
                configPath: __dirname + './../rules/.jscsrc'
            }));
    });
};