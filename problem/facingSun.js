// Given an array representing heights of buildings. 
// The array has buildings from left to right as shown in below diagram, count number of buildings facing the sunset. 
// It is assumed that heights of all buildings are distinct.

// Input : arr[] = {7, 4, 8, 2, 9}
// Output: 3
// Explanation: As 7 is the first element, it can 
// see the sunset.
// 4 can't see the sunset as 7 is hiding it. 
// 8 can see.
// 2 can't see the sunset.
// 9 also can see the sunset.

// Input : arr[] = {2, 3, 4, 5}
// Output : 4

function sunset(arr) {
    let sortRes = 1
    for(let i=1; i<arr.length; i++) {
        if(arr[0] < arr[i]) {
            sortRes++
        }
    }
    return sortRes
}

let arr = [7, 4, 8, 2, 9] // 3
let arr1 = [2, 3, 4, 5] // 4


// sunset(arr, t)
// sunset(arr1, t)
// console.log(sunset(arr, t))
console.log(sunset(arr))

// Big-O = O(n)
// Logic every element should be greater than the array's first element.