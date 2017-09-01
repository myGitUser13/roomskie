var users = [];//temp user database

function AuthController(DB){
    
 this.register = function(req,res,next){         
  console.log(req.url); 
  //authURL is used to inform view that the url is one of the auth url /register or /login
  //this helps in displaying the Register and Login links on the page
  //this is used on the header.pug
  res.render('auth/register',{authURL:true});                
 }
 
 this.registerPost = function(req,res,next){
  
  this.validate({username : req.body.username, password : req.body.password},function(err){
      //send a push message to the register view
  });    

  DB.insert('users',{username:req.body.username,password:req.body.password},function(user){
    req.session.user = user;
    res.redirect(`/user/${user.username}`);    
  });       

 }
    
    
    this.login = function(req,res,next){
        res.render('auth/login',{authURL:true,error:req.session.error}); 
    };
    
    this.logout = function(req,res,next){
     deleteUser(req.session.user);
     req.session.destroy();    
     res.redirect('/');
    }
    
    this.loginPost = function(req,res,next){


            authenticate(req.body.username,req.body.password,function(err,user){       
                    if(err){
                        //implement back ???
                        req.session.error = err;
                        res.render('auth/login',{error : err});
                    }else{
                        res.redirect(`/user/${user.username}`);                                    
                    }

            });

        
    }
}

/**********Helper Functions**********/
//Authenticates the user put this on a module ???
function authenticate(username,password,callback){
      //requery the users not necessary only to test that the user was saved during registration
        registeredUser = users.find((user)=>{
            return user.username === username;
        });
    
        if(!registeredUser){ //user does not exist            
            callback('Invalid User');
            return;
        }
    
        if(registeredUser.password !== password){
            callback('Username and Password does not match');
            return;
        }
        
        callback(null,registeredUser);
}


function deleteUser(userToDelete){
    

    let u = users.find(function(user){
        return user.username === userToDelete.username;
    });

    let i = users.indexOf(u);

    users.splice(i,1);


}

//adds the user 
function register(username,password,callback){    
    let id= users.push({username:username,password:password});    
    callback(username);
}

module.exports = AuthController;