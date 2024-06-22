class Animal {
    sound(){
        console.log('It sounds differently')
    }
}
class Dog {
    sound(){
        console.log('It Barks')
    }
}
class Cat {
    sound(){
        console.log('It says meow')
    }
}

let animal1 = new Animal()
let dog1 = new Dog()
let cat1 = new Cat()

animal1.sound()
dog1.sound()
cat1.sound()