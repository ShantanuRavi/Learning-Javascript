//----1--GLOBAL SCOPE IN JS----//

// let name = "Rahul"
// function greet(){
//     console.log(name)
// }
// greet()
// console.log(name)


//----2--FUNCTION SCOPE----//


// function test (){
//     let age = 23
//     console.log(age)
// }
// test()
// //console.log(age)  //give error


//----3--BLOCK SCOPE----//

// if (true)
// {
//     let a = 1
//     const b = 2
//     var c = 3
// }
// // console.log(a)  //gives error
// // console.log(b)  // gives error
// console.log(c)   //accessible even after not in scope


//----4--NESTED SCOP----//

// let username = "Ravi"
// function one(){
//     let website = "youtube"
//     function two(){
//         console.log(username)
//         console.log(website)      //inner can access outer
//     }
//     two()
// }
// one()

// function one(){
//     let website = "youtube"
// }
// console.log(website)    // gives error , because outer cannot access inner


//----5--HOISTING----//
// test(3)

// const test = function(nums){
//   return num + 2
// }