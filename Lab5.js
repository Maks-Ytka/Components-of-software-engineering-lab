const EventEmitter = require('events');

class ReactiveEntity extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}

