// let text = "John Doe";
// console.log(text);


//----USING STRING WITH SINGLE OR DOUBLE QUOTES----

// let carName1 = "Volvo XC60";  // Double quotes
// let carName2 = 'Maruti';  // Single quotes
// console.table([carName1,carName2])


//----QUOTES INSIDE QUOTES----

// let answer1 = "It's alright";
// let answer2 = "He is called 'Johnny'";  single quotes inside double quotes
// let answer3 = 'He is called "Johnny"';  double qoutes inside single quotes
// console.table(answer1)
// console.table(answer2)
// console.table(answer3)


//----TEMPLATE STRING----

// let name=`Rahul`
// const age=23
// console.log(`My name is ${name} and i am ${age} years old.`)


//----CHARACTER LIKE \ OR "" OR '' INSIDE STRING----

//let text = "We are the so-called "Vikings" from the north.";    THIS WILL GIVE ERROR SO WE USE \
// let text = "We are the so-called \"Vikings\" from the north.";
// console.log(text)

//----JAVASCRIPT STRINGS AS OBJECTS----

// let x = "John";
// let y = new String("John");
// console.log(x)
// console.log(y)


//----STRING METHODS / FUNCTIONS----

// let str = new String("Shantanu")
// console.log(str[5])
// console.log(str.__proto__)
// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.charAt(4))
// console.log(str.indexOf('h'))

let str = new String("Shantanu")
// let newStr1 = str.substring(0,3)    //NOTE: -VE INDEXING DOES NOT WORK IN substring()
// let newStr2 = str.slice(-5,-1)
console.log(str.substring(0,4))
console.log(str.slice(-5,-1))

// let str = "  Shantanu  "
// console.log(str)
// console.log(str.trim())

// let text = "Hello world!";
// let result = text.repeat(2);
// console.log(result)

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText)
// console.log(newText.includes('j'))


// let text = "Please visit Microsoft!";
// console.log(text.split("i"))