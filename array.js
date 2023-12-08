// Declartion of array

// 1. Using square brackets

let fruits = ["Apple", "Mango", "Banana", "Kiwi"]

// 2. Using the Array constructor

let numbers = new Array(1, 2, 3, 4, 5)

let emptyArray = new Array(5) // creates an array with 5 empty elements

// 3. Using an array literal

let colors = Array("Black", "Red", "White", "Blue", "Pink", "Orange")

for (let i = 0; i < colors.length; i++) {
    // console.log(i, colors[i])

}

// Methods in Array

// console.log(colors.push())
// console.log(colors.pop())
// console.log(colors.shift())
// console.log(colors.unshift())
// console.log(colors.join("-"))
// console.log(colors.slice(1,3)) // slice(start, end)
// console.log(colors.splice(0, 2))
// console.log(colors.reverse())
// console.log(colors.indexOf('Pink'))

// Functions

// function declaration with one and multiparameter
function functionName(name, proffesion) {
    // console.log(`Hey ${name} (${proffesion}) I am function, you called just.`)
}

// calling function
functionName("Ahmed", "Web Developer")
functionName("Hamid", "Software Engineer")


// function declaration with Unlimited parameter
function functionWithUnlimitedParameter() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    // console.log(sum)
}

// calling function
functionWithUnlimitedParameter(1, 2, 3, 4, 5, 6, 7, 8, 9)


// Arrow function

// one parameter
const square = x => x * x;
// console.log(square(5))

// multiple parameter
const add = (x, y) => x + y;
// console.log(add(5, 4))


// Anonymous Function
const xyz = function () {
    return ("I am anynomous function")
}

// console.log(xyz())


// Immediately Invoked Function Expression (IIFE)
// (function (name) {
// console.log(name)
// })('ahmed');

// Objects

// 1. object literals
const personData = {
    firstName: "Ahmed",
    lastName: "Reza",
    age: 24,
    proffesion: "Web Developer"
}
// console.log(personData.firstName)


// 2. By creating instance of object directly
var objectTwo = new Object()
objectTwo.firstName = "Ahmed"
objectTwo.lastName = "Reza"
objectTwo.age = 24
objectTwo.proffesion = "Web Developer"
// console.log(objectTwo)

// 3.By using an object constructor
// function objectThree(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
// }

// const result = objectThree("Ahmed", "Reza", 24)
// console.log(result)



// Object Methods
const person = {
    firstName: "Ahmed",
    lastName: "Reza",
    age: 24,
    proffesion: "Web Developer"
}

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))
// Object.freeze(person)
// Object.seal(person)
// person.firstName = "hamid"
// console.log(person)