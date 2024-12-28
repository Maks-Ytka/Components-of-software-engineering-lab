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
class ReactiveEntity extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }

    sendMessage(target, message) {
        console.log(`${this.name} відправляє повідомлення до ${target.name}: "${message}"`);
        target.emit('message', this.name, message);
    }

    receiveMessage(from, message) {
        console.log(`${this.name} отримує повідомлення від ${from}: "${message}"`);
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

    receiveMessage(from, message) {
        console.log(`${this.name} отримує повідомлення від ${from}: "${message}"`);
    }

    registerMessageHandler() {
        this.on('message', (from, message) => this.receiveMessage(from, message));
    }
}

