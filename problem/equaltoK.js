// We are given a list of N unsorted elements, we need to find the minimum number of steps in which the elements of the list can be added to make all the elements greater than or equal to K. 
// We are allowed to add two elements together and make them one.

// Input: arr[] = {1, 10, 12, 9, 2, 3}
//           K = 6
// Output: 2
// Explanation: First we add (1 + 2), now the new list becomes 
// 3 10 12 9 3, then we add (3 + 3),  now the new 
// list becomes 6 10 12 9, Now all the elements in 
// the list are greater than 6. Hence the output is 
// 2 i:e 2 operations are required 
// to do this.

// function quickSort(arr) {
//     if(arr.length < 2) {
//         return arr;
//     }

//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []

//     for (let i=0; i<arr.length-1; i++) {
//         if(pivot > arr[i]) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

function add(arr, k) {
    //let arr1 = quickSort(arr)
    let res = []

    for(let i=0; i<arr.length; i++) {
        if(k > arr[i]) {
            let add = arr[i] + arr[i+1]
            res = arr.push(add)
        }
    }
}

let arr1 = [1, 10, 12, 9, 2, 3]

let arr = [ 1, 2, 3, 9, 10, 12 ]

// quickSort(arr)
// add(arr, 6)

console.log(add(arr, 6))