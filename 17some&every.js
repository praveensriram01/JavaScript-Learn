// An Array
const transaction = [11,10,4,3,-19]

//some method for declarative program - Atleast 1 element in an array should satisfy the condition 
// eg: or gate 
const someMethod = transaction.some((s) => {
    return s<0
})
console.log(someMethod)

// every method for declarative program - Every element in an array should satisfy the condition 
// eg: and gate 
const everyMethod = transaction.every((s) => {
    return s>0
})
console.log(everyMethod)