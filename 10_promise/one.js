//----CREATION OF PROMISE----//

const promiseOne = new Promise(function(resolve, reject){
  //do async tasks
  //db calls , cryptography, network

  setTimeout(function(){
    console.log("Async task 1 is completed");
    resolve()
  }, 1000);
})

//-----CONSUMPTION OF PROMISE-----//

promiseOne.then(function(){        //.this is connected through resolve()
  console.log("Promise 1 consumed")
})




//---------------------------------------------------//


new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2 is completed")
    resolve()
  },2000)
}).then(function(){
  console.log("Promise 2 consumed")
})


//-------------------------------------------------//


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    let data = {username:"ravi",age:23}
    console.log("Async task 3 is completed")
    resolve(`Received Data : ${data.username} , ${data.age}`)
  },3000)
})

promiseThree.then(function(data){
  console.log(data)
  console.log("Promise 3 consumed")
})



//---------lecture watched till 23.34---------//