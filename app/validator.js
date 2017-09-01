/*Validates a given input*/

/*
*
*@param {Object} arg - With property name equals to one of the validator, 
*value is the string to validate.
*@parram {function} callback - The function to execute after validation, an instance of Error
*will be passed if there is an error, null if none.
*/
function validate(arg,callback){ 
 // call a function with function name equals to the key of the object
 // {username : "username"}
 // executes username("username") 
 let propertyName = Object.keys(arg)[0];     
 let propertyValue = arg[propertyName];

 eval(propertyName)(propertyValue,callback); //i.e username("value",callback);
}

/*validators*/
function username(username,callback){  
 if(! (/^[a-z][a-z0-9_]+$/.test(username.toLowerCase()))){
  callback(new Error('Invalid Username'));
  return;
 }
 callback(null);
 return true;
}

function password(password,callback){  
 if(! (/[a-z0-9_!@#$&^%*()]+/.test(password.toLowerCase()))){
  callback(new Error('Invalid Password'));
  return;
 }
 callback(null);
 return true;
}


module.exports = validate;