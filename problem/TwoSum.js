// Exercise - 1
// Write a JS program to check two numbers and return true if one of the number is 100 or if the sum of the two number is 100:

// a = 50
// b = 50
// c = a + b

// if (a == 100){
//     console.log("true")
// } else if (b == 100) {
//     console.log("true")
// } else if (c == 100) {
//     console.log("true")
// } else {
//     console.log('false')
// }

// Function Uprock
const equalTo100 = (a,b) => (a == 100 || b == 100 || (a + b) == 100);

console.log(equalTo100(50, 50))