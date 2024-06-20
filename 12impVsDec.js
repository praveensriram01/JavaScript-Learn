// odd or even

// Imperative way 
let a = 16

if (a % 2 == 0) {
    console.log('Even')
}
else {
    console.log('Odd')
}


// Declarative way 
let even = "Even"
let odd = "Odd"

const oddEven = (b) => (b%2 == 0 ? even : odd)

console.log(oddEven(21))

