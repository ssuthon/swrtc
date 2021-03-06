var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'))

server.listen(80);


io.on('connection', function (socket) {
  socket.on('signal', function (data) {
  	console.log('broadcasting from ' + data.by);
    socket.broadcast.emit('signal', data);
  });
});