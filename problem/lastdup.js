// We have a sorted array with duplicate elements and we have to find the index of last duplicate element and print index of it and also print the duplicate element. 
// If no such element found print a message. 

// Input : arr[] = {1, 5, 5, 6, 6, 7}
// Output :
// Last index: 4
// Last duplicate item: 6

// Input : arr[] = {1, 2, 3, 4, 5}
// Output : No duplicate found

function lastDup(arr) {
    for(let i=arr.length-1; i>=0; i--) {
        if(arr[i] == arr[i-1]) {
           console.log(`${i}, ${arr[i]}`)
        }
    }
    return "No duplicate found";
}


let arr = [1, 5, 5, 6, 6, 7]
let arr1 = [0, 2, 3, 4, 5]

lastDup(arr)
lastDup(arr1)
// console.log(lastDup(arr)) // OP: 6 and 4
// console.log(lastDup(arr1)) // OP: No duplicate found

// Big-O = O(n)