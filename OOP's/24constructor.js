function createCar(_name, _company, _color) {
    this.name = _name
    this.company = _company
    this.color = _color
    this.drive = function() {
        console.log(`I am driving ${this.name} and it is of ${this.color} color`)
    }
}

let car1 = new createCar('X5', 'BMW', 'Black')
let car2 = new createCar('S-Class', 'Mercedes', 'Black')

console.log(car1)
console.log(car2)
car1.drive()