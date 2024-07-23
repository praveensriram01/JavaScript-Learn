// End of array. Elements are swapped? Yes? Repeat the comparison.

// End of array. Elements are swapped? No? Array is sorted.

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false
        for(let i=0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while(swapped)
}

let arr = [-6, 20, 8, -2, 4, 0, -20, -30, 20, 30]
bubbleSort(arr)
console.log(arr)

// Big-O = O(n^2) = 2 nested loops