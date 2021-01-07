const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const options = {};
const io = socketio(server, options);

let counter = 0;

io.of('/my-namespace').on('connection', (socket: any) => {
  console.log('Someone connected');
  socket.emit('connect_ack', counter++);
})

server.listen(25521);
