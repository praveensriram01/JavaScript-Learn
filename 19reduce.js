// Array 
const arr1 = [1,2,3,4,5]

// Addition
let sumAdd = arr1.reduce((acc, value) => {
    let addition = acc + value
    return addition
}, 1)

// Subraction
let sumSub = arr1.reduce((acc, value) => {
    let addition = acc - value
    return addition
}, 1)

// Multiplication
let sumMul = arr1.reduce((acc, value) => {
    let addition = acc * value
    return addition
}, 1)

// Divition
let sumDiv = arr1.reduce((acc, value) => {
    let addition = acc + value
    return addition
}, 1)

console.log(`Sum of an Array:`)
console.log(`Addtion = ${sumAdd}`)
console.log(`Subraction = ${sumSub}`)
console.log(`Multiplication = ${sumMul}`)
console.log(`Divition = ${sumDiv}`)