/*  
 --- Async programming vs sync programming ---
*/

// ===== Sync Programing ===== //

// -- EX: 1 --
// const a = prompt('what is your name?')
// const b = prompt('what is your fav color?')
// const c = prompt('how old are you?')

// console.log(`Im ${a}, my fav color is ${b}, and im ${c} years old`)

// -- EX: 2 --
// console.log('first')
// console.log('second')
// console.log('third')

// ===== Async Programming =====  //

// -- EX: 1 --
// console.log('start of code')

// setTimeout(()=>{
//     console.log('3 seconds')
// },3000)
// setTimeout(()=>{
//     console.log('0 seconds async function')
// },0)

// console.log('end of code')

// -- EX: 2 --
// function myFunction(){
//     console.log('my function is running after 5 seconds')
// }

// setTimeout(()=>{
//     console.log('this will run after 5 seconds')
// },5000)

// -- EX: 3 --
// function myFunction(name) {
//   console.log("my function is running after 5 seconds", name);
// }
// setTimeout(myFunction, 1000, "Tushar")

// setTimeout(() => {
//   myFunction("tushar");
// }, 1000);

// -- EX: 4 --
// function myFunction(name){
//     console.log('my function is running after 3 seconds', name)
// }

// const myTimeout = setTimeout(myFunction,1000,'tushar')

// setTimeout(()=>{
//     clearTimeout(myTimeout)
// },2000)

// const mytTimeout = setTimeout(myFunction, 5000, "Tushar")

// setTimeout(()=>{
//     clearTimeout(mytTimeout)
// },6000)

// -- EX: 5 --

// function myClock() {
//   const date = new Date();
//   const hours = date.getHours();
//   const min = date.getMinutes();
//   const sec = date.getSeconds();
//   console.log(`${hours}:${min}:${sec}`);
// }

// setInterval(myClock, 1000);
// setInterval(myClock, 1000);
// setTimeout(myClock, 1000)
// const myInterval = setInterval(myClock,1000)
// clearInterval(myInterval)

// setTimeout(()=>{
//     clearInterval(myInterval)
// },6000)



// -- EX: 6 --
// function myClock() {
//     const date = new Date();
//     const hours = date.getHours();
//     const min = date.getMinutes();
//     const sec = date.getSeconds();

//     console.log(`${hours}:${min}:${sec}`);
//   }

//   const myInterval = setInterval(myClock,1000)

//   setTimeout(()=>{
//       clearInterval(myInterval)
//   },5000)
//youtube example of settime out real usage. and weather app loading.

/* ===== CALLBACKS ===== 

Callbacks ko hm async programming me use krte hai. for ex jaise hme kisi kaam ke hone ka wait krna hai toh tb hm callback mainly use krte hai. callback ek function hai jo ek perticular kaam hone ke baad run krta hai, agr pichle code ne hmko kuch value return kri ho toh vo callback wale function me use ho pae.

*/

// -- EX: 1 --
// function arrivedHome(name, callback){
//     console.log(`${name} arrived home`)
//     callback(name)
// }

// function anotherFunction(name){
//     console.log(name + ' this is callback function')
// }

// function simpleFunction(name, age, address, callback){
//     console.log(name)
//     callback()
//     console.log(age)
//     console.log(address)
// }

// function myfunc() { 
//     console.log('all done')
//  }

//  function anything(){
//     console.log('ajbfjkjahwkgjhakwjhgfkjw')
//  }

// simpleFunction('tushar','20', 'earth', anything )

// arrivedHome('tushar', anotherFunction)

// -- EX: 2 --
// function someWork(workName, workName2, workName3, callback, callback2) {
//   console.log(`${workName} ho gya.`);
//   console.log(`${workName2} ho gya.`);
//   console.log(`${workName3} ho gya.`);
//   setTimeout(()=>{
//       callback2()
//       callback();
//   },2000)
// }

// function workDone() {
//   console.warn(" ! sare kaam complete ho gae hai. !");
// }

// function simple(){
//     console.log('jkawhfkdjhawkjfhkjaw')
// }

// someWork('kapde dhona','game khelna','video record krni hai', workDone ,simple)

// someWork("kapde dhona","room saaf krna","video record krna", workDone);

// -- EX: 3 --
// function someWork(workName, userName, callback) {
//   console.log(`${workName} ho gya.`);
//   callback(userName);
// }

// function workDone(userName) {
//   console.warn(" ! sare kaam complete ho gae hai. ! " + userName);
// }

// someWork("kapde dhona", "Tushar", workDone);


// function simple(name, callback, age){
//     console.log(`my name is ${name}`)
//     callback(age)
// }

// function myfunc(age){
//     console.warn('this is callback function ' + age)
// }

// simple('tushar', myfunc, '20')

// -- EX: 4 -- Error Handling in callbacks
// function someTask(callback){
//     console.log('something is being done here')
//     setTimeout(()=>{
//         callback('time out', "here is your movie")
//     },0)
// }

// someTask((error, data)=>{
//     if(error){
//         console.log('NOT FOUND')
//         throw error
//     }
//     else{
//         console.log(data)
//     }
// })


// someTask((error, data)=>{
//     if(error){
//         console.log(error, " please check your input")
//     }
//     else{
//         console.log(`No error, here is your data: ${data}`)
//     }
// })

// someTask((err, data)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log('no error', data)
//     }
// })

/* ===== CALLBACK HELL (PYRAMID OF DOOM)===== */

// Callback hell is a term used to describe a situation in JavaScript where you have many levels of nested callbacks, making your code difficult to read and debug. Here is an example of callback hell:

// doSomething(function(result1) {
//   doSomethingElse(result1, function(result2) {
//     doThirdThing(result2, function(result3) {
//       doFourthThing(result3, function(result4) {
//         // And so on...
//       });
//     });
//   });
// });

// In the example above, each function is called only after the previous one has completed, and each function passes its result to the next one as an argument. This can quickly become unwieldy and hard to read, especially if you have many levels of nesting. To avoid callback hell, you can use promises or async/await to make your code more readable.

// --- EX: 1 ---
// function something() {
//   setTimeout(() => {
//     console.log("1 seconds");
//     setTimeout(() => {
//       console.log("2 seconds");
//       setTimeout(() => {
//         console.log("3 seconds");
//         setTimeout(() => {
//           console.log("4 seconds");
//           setTimeout(() => {
//             console.log("5 seconds");
//             setTimeout(() => {
//               console.log("6 seconds");
//               setTimeout(() => {
//                 console.log("7 seconds");
//                 setTimeout(() => {
//                   console.log("8 seconds");
//                   setTimeout(() => {
//                     console.log("9 seconds");
//                     setTimeout(() => {
//                       console.log("10 seconds");
//                       console.log("Finally Work Done !");
//                     }, 1000);
//                   }, 1000);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }

// something()

// Promises Example

const addPromise = function (a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};
// Consuming promises with the chaining of then()
// method and calculating the result
addPromise(1, 2)
  .then((sum1) => {
    return addPromise(3, sum1);
  })
  .then((sum2) => {
    return addPromise(4, sum2);
  })
  .then((sum3) => {
    console.log(
      `Sum of first 4 natural numbers using promise and then() is ${sum3}`
    );
  }).catch((err)=>{
    console.log(err)
  })

