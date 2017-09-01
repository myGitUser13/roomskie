'use strict';

var session = require('express-session');

var bodyParser = require('body-parser'); // ??? this should be on the middleware module, if we separate middleware

var controllers = require('../controllers/Controllers');

var expressSessionOptions = {  
    name : "hid",  
    secret: 'rx22jfsaelkfds456cx54aedfaeedaesedctt78832155d8e8exs',
    resave: false,
    saveUninitialized: true,
    cookie: { path : "/", secure : false }
  };

/**
* app is the Express instance
* expressStaticMiddleware express.static function needed so we can serve static files
*/
//???We should implement lazy loading here
module.exports = function(app,expressStaticMiddleware){ 
 app.use(session(expressSessionOptions));      
 app.use(bodyParser.urlencoded({extended : false}));    
 app.use('/assets/lib/jquery/js',expressStaticMiddleware('node_modules/jquery/dist'));
 app.use('/assets/lib/popperjs/js',expressStaticMiddleware('node_modules/popper.js/dist'));    
 app.use('/assets/lib/bootstrap/js',expressStaticMiddleware('node_modules/bootstrap/dist/js'));
 app.use('/assets/lib/bootstrap/css',expressStaticMiddleware('node_modules/bootstrap/dist/css'));    
 app.use('/assets/js',expressStaticMiddleware('public/js'));
 // app.get('/',controllers.HomeController.index);           
 // app.get('/register', controllers.AuthController.register);
 // app.post('/register', controllers.AuthController.registerPost);
 // app.get('/login', controllers.AuthController.login);
 // app.post('/login', controllers.AuthController.loginPost);    
 // app.get('/logout', controllers.AuthController.logout);  
 // app.get('/user/:name',authenticatedRoute,controllers.UserController.index);       
 app.get('/test/:username/:password', controllers.TestController.index);     
};

//???where to put the middlewares
//authenticatedRoute middleware
function authenticatedRoute(req,res,next){
    console.log(req.session.user);
    console.log(req.params.name);
    if(!req.session.user || req.session.user.username !== req.params.name){        
        res.redirect('/login');
    }else{
        next();    
    }
    
}

