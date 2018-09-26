const io = require('socket.io')(8000)

io.on('connection', function (socket) {
  io.emit('server-msg', {
    msg: 'be received by everyone'
  })

  socket.on('private message', function ({from, msg}) {
    console.log('I received a private message by ', from, ' saying ', msg)
    io.emit('server-msg', {
      msg: 'Private message received!'
    })
  })

  socket.on('disconnect', function () {
    console.log('client closed')
  })
})
