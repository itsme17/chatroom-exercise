const express = require('express');
const http = require('http');


const app = express();
const clientPath = `${__dirname}/../client`;
app.use(express.static(clientPath));
const server = http.createServer(app);
const port = 8080;
server.listen(port, () =>{
    console.log("server running on "+port);
});
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.on('sendToAll', (message) =>{
        io.emit("displayMessage", (message));
    });

    socket.on('sendToMe', (message) =>{
        socket.emit("displayMessage", (message));
    });
});

