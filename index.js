var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 7000;

// express()
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/home/index.html');
});

app.get('/chat', function (req, res) {
    res.sendFile(__dirname + '/chat.html');
});

app.get('/front', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/front/lives', function (req, res) {
    res.sendFile(__dirname + '/live/index.html');
});

// socket.io (1) QuestTitle
io.on('connection', function (socket) {
    socket.on('message', function (msg) {
        console.log('message: ' + msg);
        io.emit('message', msg);
    });
});


// http_service
http.listen(PORT, function () {
    console.log('server listening. Port:' + PORT);
});
