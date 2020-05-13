class Subject {
    constructor() {
        this.observers = [];
        this.state = {
            name: "Shefali"
        }
    }

    subscribe(observer) {
        this.observers.push(observer);
        observer(this.state);
    }

    publish() {
        this.observers.forEach(observer => observer(this.state));
    }

    changeState(name) {
        this.state.name = name;
        this.publish();
    }
}

const myObservable = new Subject();

console.log("Initial state....");
myObservable.subscribe(state => {
    console.log("Observer 1 received state", state);
});

myObservable.subscribe(state => {
    console.log("Observer 2 received state", state);
});

myObservable.subscribe(state => {
    console.log("Observer 3 received state", state);
});

console.log("Changing state...");
myObservable.changeState("Goyal");