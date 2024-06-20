// Problem with var keyword:

var a = 10
var a = 30
console.log(a) // output 30

var b = 10

if(b===10) {
    var c = 30
    console.log(c)
}

console.log(c)

function add() {
    var d = 10
    console.log(d)
}

add()

console.log(d)

