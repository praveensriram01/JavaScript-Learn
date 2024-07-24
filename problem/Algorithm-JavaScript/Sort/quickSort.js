function quickSort(arr) {

    if (arr.length < 2) {
        return arr
    }

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i=0; i<arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr = [-6, 20, 10, 8, -5, -2, 3, 4] 

let QuickSort = quickSort(arr) // [-6, -5, -2, 3, 4, 5, 8, 10, 20]
console.log(QuickSort)


// Big-O notation:
// Worst Case = O(n)
// Avg Case = O(nlogn)