// Destructuring an Array

// let arr = ['hi', 'javascript', , 5]

// let [a, b, c, d, e] = arr

// console.log(a, c)


// Destructuring an Object

let person = {
    fName: 'Praveen',
    lName: 'Sriram',
    age: 23,
    address: {
        country: 'India',
        state: 'TN'
    }
}

let {fName :fn, lName :ln, age :a, address: {country: c, state :s}} = person

console.log(`Name: ${fn} ${ln},`)
console.log(`Age: ${a},`)
console.log(`Country: ${c}, State: ${s}.`)