const events = require('events');

const eventEmitter = new events.EventEmitter();

//  Register the listeners
function addListener(params) {
  console.log('Listener 1', params);
}

function addListener2(params) {
  console.log('Listener 2', params);
}

//  Emit the event
eventEmitter.on('add', addListener);
eventEmitter.on('add', addListener);
eventEmitter.on('add', addListener);
eventEmitter.emit('add', { message: 'Added', on: new Date() });
console.log('-------------------');
eventEmitter.removeListener('add', addListener);
eventEmitter.removeListener('add', addListener);
eventEmitter.removeListener('add', addListener);
eventEmitter.removeListener('add', addListener);
eventEmitter.emit('add', { message: 'Added', on: new Date() });
