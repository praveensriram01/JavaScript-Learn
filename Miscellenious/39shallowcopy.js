// spread operator 

let firstName = {
    name: 'abc',
    age: 30
}

let secondName = {...firstName} // Shallow Copy

secondName.name = "Steve"

console.log(firstName)
console.log(secondName)