(function () {
    "use strict";

    module.exports = function(gulp, src){
        var path = require("path");
        var gUtils = require("pbdesk-gulp-utils")(gulp);
        var jshint = require("gulp-jshint");
        var eslint = require("gulp-eslint");
        var jscs = require("gulp-jscs");

        gulp.task("jsHint", function(){
            gUtils.log("Running JSHint on following files");
            return gulp
                .src(src)
                .pipe(gUtils.GP.print())
                .pipe(jshint())
                .pipe(jshint.reporter("jshint-stylish"));
        });

        gulp.task("esLint", function(){
            gUtils.log("Running ESLint on following files");
            return gulp
                .src(src)
                .pipe(gUtils.GP.print())
                .pipe(eslint({
                    envs: [
                        "node"
                    ]
                }))
                .pipe(eslint.format());
        });

        gulp.task("jscs", function() {
            gUtils.log("Running jscs on following files");
            return gulp
                .src(src)
                .pipe(gUtils.GP.print())
                //.pipe(gUtils.GP.if(gUtils.args.verbose, gUtils.GP.print()))
                .pipe(jscs({
                    configPath: path.join(__dirname, "./../rules/.jscsrc")
                }));
        });
    };

}());
