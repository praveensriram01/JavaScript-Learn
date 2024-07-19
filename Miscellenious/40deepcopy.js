// deep copy

let firstName = {
    name: 'abc',
    age: 30,
    address: {
        city: 'Chennai',
        state: 'TN'
    }
}

let secondName = JSON.parse(JSON.stringify(firstName)) // Deep copy

secondName.address.city = 'Bangalore'
secondName.address.state = 'Karnataka'

console.log(firstName)
console.log(secondName)