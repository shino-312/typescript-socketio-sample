const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const options = {};
const io = socketio(server, options);

let counter = 0;

io.of('/my-namespace').use((socket, next) => {
  console.log('===============');
  console.log('In middleware');
  console.log('===============');
  next();
})

io.of('/my-namespace').use((socket, next) => {
  console.log('===============');
  console.log('In middleware 2');
  console.log('===============');
  next();
})

io.of('/my-namespace').on('connection', (socket: any) => {
  console.log('Someone connected');

  console.log('firstname:', socket.handshake.query.firstname);
  console.log('age      :', socket.handshake.query.age);
  console.log('sex      :', socket.handshake.query.sex);  // undefined

  socket.emit('connect_ack', counter++);
})

server.listen(25521);
