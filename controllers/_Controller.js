'use strict';
/*Abstract Which all controllers must inherit*/
const validator = require('../app/validator.js');
const db = require('../db/DB.js');

db.connect('JSON.json');

function _Controller(){
 this.validate = validator;
 this.db = db; //a connected db instance;
}


module.exports = new _Controller();