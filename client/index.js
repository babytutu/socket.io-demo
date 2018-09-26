const socket = require('socket.io-client')('http://localhost:8000')
socket.on('connect', function(){
  console.log('connected!')
})
socket.emit('private message', {
  from: 'client',
  msg: 'hello world!'
})
socket.on('server-msg', function({msg}) {
  console.log(msg)
})