let addition = (a, b) => {
    console.log(a + b)
}

let subraction = (a, b) => {
    console.log(a - b)
}

let multiplication = (a, b) => {
    console.log(a * b)
}

let division = (a, b) => {
    console.log(a / b)
}

module.exports = {
    add:addition, 
    sub:subraction, 
    multi:multiplication, 
    div:division
}