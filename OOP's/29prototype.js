// default constructor prototype 
function Person(_name, _age) {
    this.name = _name
    this.age = _age
}

// created a new prototype because it should not be dryrun(again and again it will come)
Person.prototype.getNameandAge = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}

// it called with new 
let Person1 = new Person("Praveen", 23)
let Person2 = new Person("Nannick", 23)

console.log(Person1.getNameandAge())
console.log(Person2)