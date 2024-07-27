function helloWorld() {
    console.log("Hello")
    setTimeout(function(){
       console.log("World")
    }, 2000)
}

//let button = document.querySelector("button");
//button.addEventListener('click', helloWorld);

//with promise

function helloWorldPromise() 
{
    console.log("Hello");

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("World");
        }, 2000);
    });

    promise.then(function(result){
        console.log(result);
    })
}

//with async await

async function helloWorldWithAsync() 
{
    console.log("Hello");

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("World");
        }, 2000);
    });

    let result = await promise;
    console.log(result);
}


