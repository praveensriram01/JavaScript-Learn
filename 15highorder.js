// let arr = [1,2,3,4,5]

// let arrSquare = []

// for(let i=0; i<arr.length; i++) {
//     arrSquare.push(arr[i]*arr[i])
//     console.log(i)
// }

// console.log(arrSquare)

// Declarative way of problem solving

let num = [1,2,3,4,5.5]

const sqrNum = num.map(function(i){
    return i*i
})

console.log(sqrNum)

// forEach

const sqrNum1 = num.forEach((j) => {
    console.log((j*j).toFixed(0))
})