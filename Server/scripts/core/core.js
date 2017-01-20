/**
 * File core. It contains all global variables we need for the
 * back end.
 * @type {exports|module.exports}
 *
 */

var testArray = [];

/**
 * We exports the variable in order to be used in other files.
 * To imports one of the variable, you just have to write the following line:
 *      var testArray = require('../core/core').testArray; // To have test array
 * @type {{connectionVariable: *, testArray: string[]}}
 */
module.exports = {
    testArray : testArray
};



