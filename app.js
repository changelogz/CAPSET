var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 7000;


// express()
app.get('/quest', function (req, res) {
    res.sendFile(__dirname + '/quest.html');
});

// socket.io (1) QuestTitle
io.on('connection', function (socket) {
    socket.on('message_1', function (msg_1) {
        console.log('message_1: ' + msg_1);
        io.emit('message_1', msg_1);
    });
});

//socket.io (2) SubQuest
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
