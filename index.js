(function () {
    "use strict";

    module.exports = function(gulp, src){
        var path = require("path");

        require(path.join(__dirname, "/tasks/codeReview"))(gulp, src);
    };
}());

