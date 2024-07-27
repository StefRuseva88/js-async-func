async function promiseRejectionAsync() {
   let promise = new Promise(function(resolve, reject) {
       setTimeout(function() {
         reject(new Error("Error"));
      }, 1000);
   });

   try{
      await promise;
   }
   catch(err){
      console.log(err);
   }
}