(function () {
    "use strict";
    var gulp = require("gulp");
    var gUtils = require("pbdesk-gulp-utils")(gulp);
    var eslint = require("gulp-eslint");
    var jscs = require("gulp-jscs");

    gulp.task("code-review", function(){
        gUtils.log("Running ESLint on following files");
        return gulp
            .src(["./tasks/**/*.js", "./index.js", "./gulpfile.js"])
            .pipe(gUtils.GP.print())
            .pipe(eslint({
                envs: [
                    "node"
                ]
            }))
            .pipe(eslint.format())
            .pipe(jscs({
                configPath: "./rules/.jscsrc"
            }));
    });

    gulp.task("default", ["code-review"]);

}());
