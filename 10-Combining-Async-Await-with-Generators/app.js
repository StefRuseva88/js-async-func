//function generatorFunction() {

//yield 1;
//  yield 2;
//    yield 3;
//}

//const genaratorObject = generatorFunction();
//console.log(genaratorObject.next());
//console.log(genaratorObject.next());
//console.log(genaratorObject.next());
//console.log(genaratorObject.next());
//console.log(genaratorObject.next());




function asyncGenerator(generatorFunc) {
    const generator = generatorFunc();
    function handle(result) { 
        if (result.done) return Promise.resolve(result.value);
        return Promise.resolve(result.value).then(
            res => handle(generator.next(res)), 
            err => handle(generator.throw(err))
        )
    }
    try {
          return handle(generator.next());
    } catch (error) {

    }

}

function startAsyncGenerator() {
    asyncGenerator(function* () {
         const data1 = yield new Promise(resolve => setTimeout(() => resolve('Task 1 is done'), 1000));
         console.log(data1);
         const data2 = yield new Promise(resolve => setTimeout(() => resolve('Task 2 is done'), 1000));
         console.log(data2);
         const data3 = yield new Promise(resolve => setTimeout(() => resolve('Task 3 is done'), 1000));
         console.log(data3);
    }

    )

}