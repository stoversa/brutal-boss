const express = require('express'); //
const socket = require('socket.io'); //
const app = express(); //
const PORT = process.env.PORT || 4000; //


server = app.listen(process.env.PORT || 4000, function(){
    console.log('server is running on port 4000');
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    });
});











