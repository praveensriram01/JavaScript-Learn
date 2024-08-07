function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }

    let midIndex = Math.floor((leftIndex + rightIndex)/2)

    if (target === arr[midIndex]) {
        return midIndex;
    }
    if (target < arr[midIndex]) {
        return search(arr, target, leftIndex, midIndex - 1)
    } else {
        return search(arr, target, midIndex + 1, rightIndex)
    }
}

let arr = [-5, 2, 4, 6, 10]
console.log(recursiveBinarySearch(arr, 10)) // 4
console.log(recursiveBinarySearch(arr, 6)) // 3
console.log(recursiveBinarySearch(arr, 60)) // -1

// Big-O = O(logn) -> Logarithmic