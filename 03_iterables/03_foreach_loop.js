 //----SIMPLE USE OF FOREACH()----//

// const coding = ["js","ruby","java","python","cpp"]
// coding.forEach(function(item){
//  console.log(item)
// })


//----USE OF FOREACH() WITH ARROW FUNCTION----//

// const coding = ["js","ruby","java","python","cpp"]
// coding.forEach((item)=>{
//   console.log(item)
// })

//----USE OF FOREACH() BY PASSING REFERENCE OF USER DEFINED FUNCTION----//

// const coding = ["js","ruby","java","python","cpp"]
// function printme(item){
//   console.log(item)
// }
// coding.forEach(printme)  //NOTE:printme is reference because it is without ()

//----USE OF FOREACH() WITH MULTIPLE PARAMETER----//

// const coding = ["js","ruby","java","python","cpp"]

// coding.forEach((item,index,coding)=>{
//   console.log(item,index,coding)
// })

//----USE OF FOREACH() WITH ARRAY OF OBJECTS----//

const coding = [
  {
    language:"JAVASCRIPT",
    ext:"js"
  },
  {
    language:"JAVA",
    ext:"java"
  },
  {
    language:"PYTHON",
    ext:"py"
  }
]

coding.forEach((item)=>{
  console.log(`${item.language} -> ${item.ext}`)
  
})