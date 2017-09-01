// 'use strict';
// var DB = require('../db/DB.js');
const controller = require('./_Controller.js');
var TestController = require('./TestController.js');
// var AuthController = require('./AuthController.js');
// var HomeController = require('./HomeController.js');
// var UserController = require('./UserController.js');

// DB.connect('JSON.json');
TestController.prototype = controller;
// ???lazy load this
module.exports = {
    "TestController":new TestController(),//bind DB instance and then instantiate shortcut to var x= TestController.bind; new x();
    // "AuthController":new (AuthController.bind({},DB)),
    // "HomeController":new (HomeController.bind({},DB)),
    // "UserController":new (UserController.bind({},DB))
    
};
