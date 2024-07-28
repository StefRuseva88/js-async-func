async function throttlePromises() {
    const asyncTasks = [
        () => new Promise(resolve => setTimeout(() => {console.log('Task 1 is done'); resolve('Task 1 is done')}, 1000)),
        () => new Promise(resolve => setTimeout(() => {console.log('Task 2 is done'); resolve('Task 2 is done')}, 1500)),
        () => new Promise(resolve => setTimeout(() => {console.log('Task 3 is done'); resolve('Task 3 is done')}, 2000)),
        () => new Promise(resolve => setTimeout(() => {console.log('Task 4 is done'); resolve('Task 4 is done')}, 2500))
    ];

    async function throttle(tasks, limit) {
        const results = [];
        const executing = [];
        for (const task of tasks) {
            const promise = task().then(result => {
                executing.splice(executing.indexOf(promise), 1);
                return result;
            });
            executing.push[promise];
            results.push[promise];
            if (executing.length >= limit) {
                await Promise.race(executing);
            }
        }

        return Promise.all(results);
    }

    const results = await throttle(asyncTasks, 2);
    console.log('All tasks are done!', results);
}

