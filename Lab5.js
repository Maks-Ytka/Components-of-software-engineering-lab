const EventEmitter = require('events');


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

const entityA = new ReactiveEntity('Entity A');
const entityB = new ReactiveEntity('Entity B');
const entityC = new ReactiveEntity('Entity C');

entityA.registerMessageHandler();
entityB.registerMessageHandler();
entityC.registerMessageHandler();

entityA.sendMessage(entityB, 'Привіт, Entity B!');
entityB.sendMessage(entityA, 'Привіт, Entity A! Як справи?');
entityC.sendMessage(entityA, 'Привіт, Entity A! Це Entity C.');
entityA.sendMessage(entityC, 'Привіт, Entity C! Рад тебе чути.');

