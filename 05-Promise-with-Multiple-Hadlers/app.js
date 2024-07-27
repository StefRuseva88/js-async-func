function promiseWithMultipleHandlers() {
let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Hello World");          
    }, 2000)
});

promise.then(function(result){
    console.log(result);

    return result;
}).then(function(result){
   console.log(result);
})

}