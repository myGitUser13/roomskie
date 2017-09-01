//Manages the creation of Entities / Value Objects of the application
//This should manage crud operations
'use strict';

//Entities
function User(username,password){
 this.username = username;
 this.password = password;
}

var entities = {
 USER : "USER",
};

module.exports = {        
  create : function(entityName,...args){ 
    console.log(entityName);         
    switch(entityName.toUpperCase()){
     case entities.USER: {
      //check argument length/type for validation
      return new User(args[0],args[1]);         
    }
  }
 }
}

module.exports.entities = entities;