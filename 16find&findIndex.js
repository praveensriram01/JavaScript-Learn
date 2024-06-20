//An Array 

const transaction = [11,10,4,3,-19]


// find method for declarative program
const lessThan = transaction.find((i) => {
    return i<10
})
console.log(lessThan)


// findindex method for declarative program
const Index = transaction.findIndex((j) => {
    return j<10
})
console.log(Index)