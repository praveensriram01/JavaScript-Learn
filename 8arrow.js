
let a = a => console.log(10)


// The whole function syntax
let add_1 = function(b_1) {
    console.log(b_1+10)
}

// arrow function syntax (optimized)
let add = b => console.log(b+10)

add_1(10)
add(10)

