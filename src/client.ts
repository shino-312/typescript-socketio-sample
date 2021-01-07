const io = require('socket.io-client');

const socket = io('http://localhost:25521/my-namespace');

socket.on('connect_ack', (arg) => {
  console.log(arg);
})
