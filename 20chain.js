// let arr = [
//     {name: 'A', age: 23, gender: 'M'},
//     {name: 'B', age: 24, gender: 'F'},
//     {name: 'C', age: 20, gender: 'M'},
//     {name: 'D', age: 21, gender: 'F'},
//     {name: 'E', age: 22, gender: 'M'},
//     {name: 'F', age: 23, gender: 'F'}
// ]


// let males = arr.filter((obj) => {
//     return obj.gender == 'M'
// }).map((male) => {
//     return male.age
// })

// console.log(males)

const trans = [1,-2,3,4,-5,6,7,8,-9,10]

let pos = trans.filter(function(m) {
    return m>0
})

let sum = pos.reduce((acc, value) => {
    add = acc+value
    return add
})

console.log(pos)
console.log(sum)