// //----CREATION OF PROMISE----//

// const promiseOne = new Promise(function(resolve, reject){
//   //do async tasks
//   //db calls , cryptography, network

//   setTimeout(function(){
//     console.log("Async task 1 is completed");
//     resolve()
//   }, 1000);
// })

// //-----CONSUMPTION OF PROMISE-----//

// promiseOne.then(function(){        //.this is connected through resolve()
//   console.log("Promise 1 consumed")
// })




// //---------------------------------------------------//


// new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log("Async task 2 is completed")
//     resolve()
//   },2000)
// }).then(function(){
//   console.log("Promise 2 consumed")
// })


// //-------------------------------------------------//


// const promiseThree = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log("Async task 3 is completed")
//     resolve({username:"Ravi",age:23})
//   },3000)
// })

// promiseThree.then(function(data){
//   console.log(data)
//   console.log("Promise 3 consumed")
// })


// //-------------------------------------------------//

// const promiseFour = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     let error = false
//     if(!error)
//     {
//       console.log("Async task 4 is completed")
//       resolve({username:"Ranjan",age:25})
//     }
//     else{
//       reject("ERROR : 4th went wrong")
//     }
//   },4000)
// })

// promiseFour.then(function(data){
//   console.log(data)
//   return data.username
// }).then((username)=>{
//   console.log(username)
//   console.log("Promise 4 consumed")
// }).catch(function(error){
//   console.log(error)
//   console.log("Promise 4 consumed")
// }).finally(function(){
//   console.log("Promise 4 is either resolved or rejected")
// })


// //------------------------------------------------------//

// const promiseFive = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     let error = true
//     if(!error){
//       console.log("Async task 5 is completed")
//       resolve({username:"Sam",age:28})
//     }
//     else{
//       reject("ERROR : 5th went wrong")
//     }
//   },5000);
// })

// async function consumepromiseFive(){
//   try {
//     const response = await promiseFive
//     console.log(response)
//     console.log("Promise 5 consumed")
//   } catch (error) {
//     console.log(error)
//   }
// }
// consumepromiseFive()

// //-----------------------------------------------------//
// async function getalldata(){
//   const response = await fetch("https://api.github.com/users/shantanuravi")
//   const data = await response.json()
//   setTimeout(function(){
//     console.log("Async task 6 is completed")
//     console.log(data)
//   },6000)
// }
// getalldata()


//------------------------------------------//

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error)
})