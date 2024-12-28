const EventEmitter = require('events');

class ReactiveEntity extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}
class ReactiveEntity extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }

    sendMessage(target, message) {
        console.log(`${this.name} відправляє повідомлення до ${target.name}: "${message}"`);
        target.emit('message', this.name, message);
    }
}

