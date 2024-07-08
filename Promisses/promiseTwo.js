const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        console.log('Invoke promise Two');
        
        if (!error) {
            resolve({Name: 'Akshay', age: 23});
        }
        else
        {
            reject('ERROR: something went wrong')
        }
        
    }, 1000)
})

promiseTwo.then(function (userInfo) {
    console.log(userInfo);
    return userInfo.Name
})
.then(function(userName){
    console.log(userName);
})
.catch(function(error){
    console.log(error);
})
.finally(() => {console.log('Everything has been done')})