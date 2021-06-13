const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('eventoCustom', (message, status) => {
    console.log(`${status}: ${message}`);
});

emitter.emit('eventoCustom', 'Mensagem carregada com sucesso!', 200);