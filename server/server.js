const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
   console.log('New user connected');

   // socket.emit('newEmail', {
   //    from: 'izzan@imel.com',
   //    text: 'test ting',
   //    createAt: 123
   // });
   // socket.on('createEmail', (newEmail) => {
   //    console.log('create email', newEmail);
   // });

   socket.emit('newMessage', {
      text: 'babababaaaba',
      createdAt: 121212
   });

   socket.on('createMessage', (newMessage) => {
      console.log('newMessage', newMessage);
   });

   socket.on('disconnect', () => {
      console.log('Disconnected to the client');
   });
});


server.listen(port, () => {
   console.log(`Server connected to port ${port}`);
});
