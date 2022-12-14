const {EventEmitter} = require('events')
const ev = new EventEmitter()

//ev.once server para ouvir uma unica vez
ev.on('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', "Hed")
ev.emit('saySomething', "Raul")
ev.emit('saySomething', "Messi")
ev.emit('saySomething', "Sabrina")

