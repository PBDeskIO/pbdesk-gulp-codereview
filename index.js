'use strict'

module.exports = function(gulp, src){
    require(__dirname + '/tasks/codeReview')(gulp, src)
};
