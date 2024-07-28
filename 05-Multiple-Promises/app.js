function multiplePromises() {
      const promise1 = new Promise(resolve => setTimeout (() => resolve('Promise 1 is resolved'), 1000));
      const promise2 = new Promise(resolve => setTimeout (() => resolve('Promise 2 is resolved'), 2000));
      const promise3 = new Promise((_, reject) => setTimeout (() => reject('Promise 3 is rejected'), 3000));

      Promise.allSettled([promise1, promise2, promise3]).then(results => (
            results.forEach(result => console.log(result.status, result.value || result.reason))
      ));
}