/**
 * Manage Mock
 * @type {exports|module.exports}
 */

var configManager = require('../core/config');
var dataForPie = require('../core/mock').dataForPie;
var dataForBarScatter = require('../core/mock').dataForBarScatter;
var dataForPyramid = require('../core/mock').dataForPyramid;
var dataForRainDrop = require('../core/mockRainDrop').dataForRainDrop;
var fs = require('fs');
var http = require('http');


/**
 * Function getMockBarScatter.
 * @param success
 * @param fail
 */
exports.getMockPie = function (success, fail) {
    success(dataForPie);
};

/**
 * Function getMockBarScatter.
 * @param success
 * @param fail
 */
exports.getMockPyramid = function (success, fail) {
    success(dataForPyramid);
};

/**
 * Function getMockBarScatter.
 * @param success
 * @param fail
 */
exports.getMockRainDrop = function (success, fail) {
    success(dataForRainDrop);
};

/**
 * Function getMockBarScatter.
 * @param success
 * @param fail
 */
exports.getMockBarScatter = function (success, fail) {
    success(dataForBarScatter);
};





