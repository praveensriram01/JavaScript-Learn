class person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }

    welcome() {
        console.log(`Welcome ${this.name} ${this.age}`)
    }
}

let person1 = new person("Praveen", 23)

person1.welcome()

console.log(person1)