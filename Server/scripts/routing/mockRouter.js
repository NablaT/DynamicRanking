/**
 * File routes. It makes the link between the back-end and the front-end.
 * In fact, it manages the behavior of the back-end according to the
 * http requests from the front-end.
 */

var express = require('express');

var router = express.Router();

var mockManager = require('./../model/manageMock');



/**
 * Function get.
 * We create two functions: the success and the fail functions.
 * The success function sends back to the front-end a JSON object.
 * The fail function sets the response HTTP status code to statusCode and sends its string representation as the response body.
 * Then we call the function getAllMock with our two functions (fail and success) as parameters in order to
 * use them into mockManager function.
 */
router.get('/pie', function(req,res){
    var success = function (objectJSON) {
        res.send(objectJSON);
    };

    var fail = function(){
        res.sendStatus(500);  // equivalent to res.status(500).send('Internal Server Error')
    };

    mockManager.getMockPie(success, fail);
});

router.get('/pyramid', function(req,res){
    var success = function (objectJSON) {
        res.send(objectJSON);
    };

    var fail = function(){
        res.sendStatus(500);  // equivalent to res.status(500).send('Internal Server Error')
    };

    mockManager.getMockPyramid(success, fail);
});


router.get('/raindrop', function(req,res){
    var success = function (objectJSON) {
        res.send(objectJSON);
    };

    var fail = function(){
        res.sendStatus(500);  // equivalent to res.status(500).send('Internal Server Error')
    };

    mockManager.getMockRainDrop(success, fail);
});

router.get('/scatter', function(req,res){
    var success = function (objectJSON) {
        res.send(objectJSON);
    };

    var fail = function(){
        res.sendStatus(500);  // equivalent to res.status(500).send('Internal Server Error')
    };

    mockManager.getMockBarScatter(success, fail);
});

router.get('/bar', function(req,res){
    var success = function (objectJSON) {
        res.send(objectJSON);
    };

    var fail = function(){
        res.sendStatus(500);  // equivalent to res.status(500).send('Internal Server Error')
    };

    mockManager.getMockBarScatter(success, fail);
});



/**
 * We export the router in order to be imported in other files.
 */
module.exports = router;
