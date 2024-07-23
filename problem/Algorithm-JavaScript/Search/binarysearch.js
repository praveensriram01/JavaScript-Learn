// Problem = Given a sorted array of 'n' elements and tartget element 't', find the index of 't' in the array. Return -1 if the target element was not found.

// Notes: Binary search only works when the array is sorted or may use the linear search algorithm to find an element.

function binarySearch(n, t) {
    let leftIndex = 0
    let rightIndex = n.length - 1

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex)/2)
        if(t === n[midIndex]) {
            return midIndex;
        }
        if(t < n[midIndex]) {
            rightIndex = midIndex - 1
        } else {
            leftIndex = midIndex + 1
        }
    }
    return -1
}

let sorting = [-5, 2, 4, 6, 10]

console.log(binarySearch(n, 10)) // 4

// Big-O = O(log n) = Logirathmic