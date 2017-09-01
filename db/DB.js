//A simple file database persistence implementation,
const fs = require('fs');

const entityManager = require('./entities/entityManager.js');

function DB(){

  self = this;

  self.DBtype; // database type, filename of the DATABASE i.e. JSON.json

  self.readStream;
  
  self.writeStream;

  self.schema;//the database as a javascript object,parsed from json
  
  self.entityManager = entityManager;

  self.connect = function(DBtype){ //JSON in this case
   self.DBtype = DBtype;
   
   self.readStream = fs.createReadStream(`${__dirname}/${self.DBtype}`,'utf8');//default utf8   
   var buff = '';
   self.readStream.on('data',function(chunk){
     buff += chunk;     
   });
   //set the schema after reading the file, parse to javascript object
   self.readStream.on('end',function(){
    // "this" here is the ReadStream object not DB, so this.schema will be attached to this.readStream.schema
    // hence use "self"
    self.schema = JSON.parse(buff);     
   });
   return self;
  };

  self.insert = function(tableName,data,callback){       
   
   this.writeStream = fs.createWriteStream(`${__dirname}/${this.DBtype}`);//default utf8
   data.id = this.schema[tableName].length + 1;// add id to data increment id everytime,tableName is an array
   this.schema[tableName].push(data);
   
   this.writeStream.write(JSON.stringify(this.schema));
   callback(data);//send saved data to the callback;
  };
}


module.exports = new DB();