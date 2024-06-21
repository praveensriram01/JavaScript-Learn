// // --------------- Strict mode --------


'use strict'

// // `this` Keyword

// console.log(this) //OP: {}

// // Function in this keyword
// function thisKey1() {
//     console.log(this)
// }
// thisKey1()


// // Variablized function()
// let thisKey = () => console.log(this)
// thisKey()


// // Object -> function()
// let obj1 = {
//     thiskey12: function() {
//         console.log(this)
//     }
// }
// obj1.thiskey12()


// // Object -> function inside a function
// let obj2 = {
//     name: "Praveen",
//     age: 23,
//     thiskey13: function() {
//         function thiskey14() {
//             console.log(this)
//         }

//         thiskey14()
//     }
// }
// obj2.thiskey13()
