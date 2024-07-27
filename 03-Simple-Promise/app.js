function simplePromise() {
    let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
          resolve("Success!");
        }, 2000)
    });

    promise.then(function(result){
        console.log(result);
    })

}