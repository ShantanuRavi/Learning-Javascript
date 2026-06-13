//----OBJECTS USING LITERALS----//



// const mySym = Symbol("h")
// const jsUser = {
//     name:"Ravi",
//     age:23,
//     email:"ravi@gmail.com",
//     location:"Ranchi",
//     isLoggedIn:false,
//     loggedInDays:["mon","tue"],
//     [mySym]:"hello"
// }

//----ACCCESSING OBJETCS ELEMENTS----//


// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(jsUser["email"])
// console.log(jsUser)


//----FREEZING THE OBJECTS----//

// const mySym = Symbol("h")
// const jsUser = {
//     name:"Ravi",
//     age:23,
//     email:"ravi@gmail.com",
//     location:"Ranchi",
//     isLoggedIn:false,
//     loggedInDays:["mon","tue"],
//     [mySym]:"hello"
// }

// Object.freeze(jsUser)

// jsUser.location="Patna"

// console.log(jsUser)



//----FUNCTION INSIDE OBJECTS----//

// const mySym = Symbol("h")
// const jsUser = {
//     name:"Ravi",
//     age:23,
//     email:"ravi@gmail.com",
//     location:"Ranchi",
//     isLoggedIn:false,
//     loggedInDays:["mon","tue"],
//     [mySym]:"hello"
// }

// jsUser.greetings=function(){
//     return "Good Morning"
// }
// console.log(jsUser.greetings())


//----THIS FUNCTION USING OBJECTS(INTRO)----//

const mySym = Symbol("h")
const jsUser = {
    name:"Ravi",
    age:23,
    email:"ravi@gmail.com",
    location:"Ranchi",
    isLoggedIn:false,
    loggedInDays:["mon","tue"],
    [mySym]:"hello"
}

jsUser.greetings=function(){
    return `Good Morning ${this.name}`
}

console.log(jsUser.greetings())