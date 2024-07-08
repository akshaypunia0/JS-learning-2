let promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('promise one invoked');
        resolve();  //this is compulsory to run .then()
    }, 1000)
})

.then(function(){
    console.log('Here is promise one');
})