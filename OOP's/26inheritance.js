class Person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }

    welcome(){
        console.log(`My name is ${this.name} and My age ${this.age}`)
    }
}

class Teacher extends Person{
    constructor(_name, _age, _subject){
        super(_name, _age)
        this.subject = _subject
    }
    test(){
        super.welcome()
    }
}

class Student extends Person {
    constructor(_name, _age, _class){
        super(_name, _age)
        this.class = _class
    }
}

let person1 = new Teacher("Praveen", 28, "Mathematics")

console.log(person1)
person1.test()