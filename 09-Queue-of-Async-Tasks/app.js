class AsyncQueue {
    constructor() {
        this.queue = [];
        this.processing = false;
    }

    enque(task) {
            this.queue.push(task);
            if(!this.proceaaing) this.process();
    }

    async process() {
        this.proceaaing = true;
        while (this.queue.length > 0) {
            const task = this.queue.shift();
            await task();
        }
        this.processing = false;
    }
}

function startQueue() {

    const queue = new AsyncQueue();
    queue.enque(() => new Promise(resolve => setTimeout(() => {console.log('Task 1 is done'); resolve()}, 1000)));
    queue.enque(() => new Promise(resolve => setTimeout(() => {console.log('Task 2 is done'); resolve()}, 500)));
    queue.enque(() => new Promise(resolve => setTimeout(() => {console.log('Task 3 is done'); resolve()}, 1500)));

}