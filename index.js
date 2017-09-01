
var express = require('express');

var app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);

var config = require('./config/app.json');

var webRoutes = require('./routes/web.js');

app.set('view engine','pug');

// bootstrap(app,express.static,io,config);

webRoutes(app,express.static);

http.listen(8114,'127.0.0.1',function(){
    console.log('listening at port 8114');  
});
