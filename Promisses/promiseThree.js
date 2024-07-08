// const promiseThree = new Promise(function (reject, resolve) {
//     let error = true;

//     if (!error) {
//         resolve({Name: 'Akshay', age: 23});
//     }

//     else
//     {
//         reject('Error: something went wrong')
//     }
// })

// async function consumePromiseThree(){
//     try {
//         const response = await promiseThree;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseThree();



//   ------------ fetch() --------------

// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/akshaypunia0')

.then(function(myDAta){
    return myDAta.json();
})
.then(function(data){
    // console.log(data);
    console.log(data.location);
})
.catch(function(error){
    console.log(error);
})