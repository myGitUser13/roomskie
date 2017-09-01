express = require('express');

app = express();

http = require('http').Server(app);

io = require('socket.io')(http);

fs = require('fs');

var usersdb;

reader = fs.createReadStream(`${__dirname}/server/db/users.json`,'utf8');

writer = fs.createWriteStream(`${__dirname}/x.txt`,"utf8");


var consolidatedChunks = '';

reader.on('data',function(chunk){
    consolidatedChunks += chunk;
    console.dir(consolidatedChunks);
});

reader.on('end',function(data){
    usersdb = JSON.parse(consolidatedChunks);
    console.log(usersdb);
    usersdb.
});

reader.pipe(writer);














//dbWriteStream = fs.createWriteStream(`${__dirname}/server/db/users.json`,"utf8");