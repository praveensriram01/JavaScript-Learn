// Given an array of 1s and 0s which has all 1s first followed by all 0s. 
// Find the number of 0s. Count the number of zeroes in the given array.

// Input: arr[] = {1, 1, 1, 1, 0, 0}
// Output: 2

// Input: arr[] = {1, 0, 0, 0, 0}
// Output: 4

// Input: arr[] = {0, 0, 0}
// Output: 3

// Input: arr[] = {1, 1, 1, 1}
// Output: 0

function findZero(arr) {
    let res = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 0) {
            res++;
        }
    }
    return res;
}

let arr = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
let arr1 = [1, 0, 0, 0, 0]
let arr2 = [1, 1, 1, 1, 1]

//findZero(arr)
console.log(findZero(arr)) // OP: 6
console.log(findZero(arr1)) // OP: 4
console.log(findZero(arr2)) // OP: 0