const io = require('socket.io-client');

const opts = {
  transports: ['websocket'],
  query: {
    "firstname": "Tom",
    "lastname": "Cruise", // not used at server side
    "age" : 33,
  },
  reconnection: false,
  agent: false // https://github.com/socketio/engine.io-client/issues/192
};

const socket = io('http://localhost:25521/my-namespace', opts);
const socket2 = io('http://localhost:25521/invalid-namespace', opts);

socket.on('connect_ack', (arg) => {
  console.log(arg);
  console.log('socket :', socket.connected);
  console.log('socket2:', socket2.connected);
})

socket2.on('connect_ack', (arg) => {
  console.log(arg);
  console.log('socket :', socket.connected);
  console.log('socket2:', socket2.connected);
})


console.log('socket :', socket.connected);
console.log('socket2:', socket2.connected);
