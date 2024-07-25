function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2)
    let leftarr = arr.slice(0, mid)
    let rightarr = arr.slice(mid)

    return mergeSorting(mergeSort(leftarr), mergeSort(rightarr))
}

function mergeSorting(leftarr, rightarr) {
    const sorted = []

    while(leftarr.length && rightarr.length){
        if(leftarr[0] <= rightarr[0]) {
            sorted.push(leftarr.shift())
        } else {
            sorted.push(rightarr.shift())
        }
    }
    return [...sorted, ...leftarr, ...rightarr]
}

let arr = [-6, -8, -10, 10, 9, 2, 5]

let merged = mergeSort(arr)
console.log(merged) // [-10, -8, -6, 2, 5,  9, 10]

// Big-O = O(nlogn)