
var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 7000;



// express "/" setting
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/home/index.html');
});

app.get('/chat', function (req, res) {
    res.sendFile(__dirname + '/chat.html');
});

app.get('/quest', function (req, res) {
    res.sendFile(__dirname + '/quest.html');
});

app.get('/server', function (req, res){
    res.sendFile(__dirname + '/server.html');
});


app.get('/front', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/front/lives', function (req, res) {
    res.sendFile(__dirname + '/live/index.html');
});



// socket.io RealtimeChat
io.on('connection', function (socket) {
    socket.on('message', function (msg) {
        console.log('message: ' + msg);
        io.emit('message', msg);
    });
});

// socket.io QuestTitle(1)
io.on('connection', function (socket) {
    socket.on('message_1', function (msg_1) {
        console.log('message_1: ' + msg_1);
        io.emit('message_1', msg_1);
    });
});
//socket.io Quest-Sub(2)
io.on('connection', function (socket) {
    socket.on('message_2', function (msg_2) {
        console.log('message_2: ' + msg_2);
        io.emit('message_2', msg_2);
    });
});



// http_service
http.listen(PORT, function () {
    console.log('server listening. Port:' + PORT);
});
