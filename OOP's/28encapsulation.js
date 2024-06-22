function Person(_name, _age) {
    let name = _name
    let age = _age

    this.getDetails = () => {
        return name
    }
}

let person1 = new Person("Praveen", 23)

console.log(person1.getDetails())