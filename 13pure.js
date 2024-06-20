// Pure vs Impure function

// Impure Function cause it's a global variable

let x = 10

function addImpure(b) {
    console.log(b+x)
}

addImpure(12) // OP: 22

// Pure Function

let add = (a) => {
    console.log(a+10)
}

add(10) //OP: 20

//Pure function 

function addPure(y, z) {
    return y+z;
}

console.log(addPure(10, 10)) //OP: 20