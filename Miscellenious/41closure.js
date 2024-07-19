// Closure Function:

// function test() {
//     let a = 10

//     function test1() {
//         console.log(a)
//     }

//     return test1;
// }

// let fun = test()

// console.log(fun)

// fun()


// Nested Closure Function

function test() {
    let name = "Abc"

    function displayName(){
        //console.log(name)

        let age = 30

        function displayAge(){
            console.log(`My name is "${name}" and my age is "${age}"`)
        }
        return displayAge
    }
    return displayName
}

let fun = test()
//console.log(fun)
//fun() // displayName function will be stored 

let fun1 = fun()
console.log(fun1)
fun1() // displayAge function will be stored 