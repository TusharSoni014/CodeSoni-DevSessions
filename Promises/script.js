// A JavaScript promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// Promises are used to handle asynchronous operations in JavaScript, such as making an HTTP request to a server or reading a file from the file system. Promises provide a way to write asynchronous code that is easier to read and debug than using callback functions.

// Here is a simple example of how to use a promise in JavaScript:

// const promise = new Promise((resolve, reject) => {
//   // Do some asynchronous operation, like making an HTTP request
//   if (operationWasSuccessful) {
//     // If the operation was successful, resolve the promise with a value
//     resolve(value);
//   } else {
//     // If the operation failed, reject the promise with an error
//     reject(error);
//   }
// });

// promise.then((value) => {
//   // This function will be called when the promise is resolved
//   console.log(value);
// }).catch((error) => {
//   // This function will be called when the promise is rejected
//   console.error(error);
// });

// The then method is called when the promise is resolved, and the catch method is called when the promise is rejected. The then and catch methods can be used to chain multiple async operations together, which makes the code easier to read and maintain.

//Promise is a Javascript Object which has three states
// 1. Pending
// 2. Resolved (fullfilled)
// 3. Rejected (fullfilled)

//promise analogy
// -- friend take money
// -- api call krne wala example
// -- cooking multiple things at same time. (oven, gas pr kuch rkha hai, ya bhar se kuch sman lana hai, etc)

//PROMISE IS A SOLUTION OF CALLBACK HELL

// --- Example 1 ---
// const work = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("here is some data");
//   }, 2100);
//   setTimeout(() => {
//     reject(new Error('404 not found'));
//   }, 2000);
// });

// const work = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('here is your data')
//   },5000)

//   setTimeout(()=>{
//     reject('error not found')
//   },10000)
// })

// console.log(work)

// work.then((data)=>{
//   console.log(data)
// }).catch((err)=>{
//   console.log(err + ' catch statement')
// })

//resolve or reject state
// work
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     alert(err)
//   });

//pending state
// console.log(work)

// --- Example 2 ---
// const someWork1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(50)
//   },1000)
// })

// const someWork3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(150)
//   },3000)
// })

// const someWork2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // reject(new Error('this is new error'))
//     reject('this is new error')
//   },1000)
// })

// someWork2.then(data =>{
//   console.log(data)
// }).catch(err =>{
//   console.log(err)
// })

// someWork1.then((data)=>{
//   console.log(data)
// })

// someWork2.then((data)=>{
//   console.log(data)
// }).catch((err)=>{
//   console.log(err + ' catch statement')
// })

// someWork3.then(data =>{
// console.log(data)
// })
// const someWork1 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve('work done!')
//   }, 1000);
// })
// const someWork2 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     reject('failed to complete task')
//   }, 1000);
// })

// someWork1.then((result)=>{
//   console.log(result)
// })

// someWork2.catch((err)=>{
//   console.log(err + ' try again')
// })

// --- Example 3 ---
// const someWork = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('work done !')
//     // reject('work failed !')
//   },1000)
// })

// someWork.then(data => {
//   console.log(data)
// })

// const someWork = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve({
//       name:'tushar',
//       age:20,
//       skills: ['html','css']
//     })
//   }, 1000);
// })

// someWork.then(data => {
//   console.log(data)
// })

// someWork.then((data)=>{
//   console.log(data)
// }).catch((err)=>{
//   console.log(err)
// })

// someWork.then((data)=>{
//   console.log(data)
// },(err)=>{
//   console.log(err)
// })

// PROMISE CHAINING //

// --- Example 1 ---

// const task = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve(10)
//   },1000)
// })

// task.then(data =>{
//   console.log(data)

//   return new Promise((resolve, reject)=>{
//     resolve('second promise')
//   })
// }).then(data2 =>{
//   console.log(data2)

//   return new Promise((resolve,reject)=>{
//     resolve('third promise')
//   })
// }).then(data3 =>{
//   console.log(data3)
// })

// task.then(data => {
//   console.log(data)

//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(data + 1)
//     },1000)
//   })
// }).then(data => {
//   console.log(data)

//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(data + 1)
//     },1000)
//   })

// }).then(data => {
//   console.log(data)

//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(data + 1)
//     },1000)
//   })
// })

// --- Example 2 ---
// const calculate = function (a,b){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(a+b)
//     },1000)
//   })
// }

// calculate(1,1).then(data1 => {
//   console.log(data1 * 2)
//   return calculate(data1, 1)
// }).then(data2 => {
//   console.log(data2 * 2)
//   return calculate(data2, 1)
// }).then(data3 => {
//   console.log(data3 * 2)
// })

// calculate(1,1).then(result =>{
//   console.log(result)
//   return calculate(result, 1)
// }).then(result2 =>{
//   console.log(result2)
//   return calculate(result2, 1)
// }).then(result3 =>{
//   console.log(result3)
// })

// --- Example 3 ---
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result);
//     return result * 2;
//   });

// --- Example 4 ---

// const task = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// });

// task
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//   });

// --- Example 5 ---

// const task = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('this is data')
//   },100)
// })

// task.then(data => {
//   console.log('promise done')
// })
// task.then(data => {
//   console.log('task with same promise')
// })
// task.then(data => {
//   console.log('another task with same promise' + data)
// })

// --- Example 6 ---
// const task1 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('this is data 1')
//   },1000)
// })
// const task2 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('this is data 2')
//   },2000)
// })
// const task3 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('this is data 3')
//   },3000)
// })

// const allPromises = Promise.all([task1, task2, task3])
// allPromises.then(data =>{
//   console.log(data)
// })
// const allPromises = Promise.all([task1,task2,task3])
// // const allPromises = Promise.allSettled([task1,task2,task3]) //for handling failed promises
// allPromises.then(data =>{
//   console.log(data)
// })

// --- Example Fetch API with async await ---

// fetch() function is used to make async api request in javsacript which returns promise as a result
//promises are used to handle multiple async request at same time, calling multiple apis and all of them taking different time to resolve.

// --- Example 1 ---

// const task = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('this is data');
//   }, 3000);
// });

// async function fetchData() {
//   const response = await task;
//   return response;
// }

// const myData = fetchData();
// myData.then( data => {
//   console.log(data)
// })

// async function fetchData(){
//   const response = await task
//   return response;
// }

// const myData = fetchData()
// myData.then(data =>{
//   console.log(data)
// })

// --- Example 2 ---
// demo api: https://reqres.in/api/users?page=2

// async function fetchData() {
//   const response = await fetch('https://reqres.in/api/users?page=2')
//   const responseJSON = await response.json()
//   return responseJSON
// }

// const myData = fetchData()

// myData.then(data => {
//   console.log(data.support.url)
// })

// async function fetchData(){
//   const response = await fetch('https://reqres.in/api/users?page=2')
//   const responseJSON = await response.json()
//   return responseJSON;
// }

// const myData = fetchData()
// myData.then(data =>{
//   console.log(data)
// })
