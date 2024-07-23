// Virtually split the array into sorted and unsorted.
// Assume that first element is sorted and remaining elements are unsorted.
// select the unsorted elements and compare with all sorted elements.
// If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift the larger part towards the right.
// Insert the selected element to the right index. 
// Repeat till all unsorted elements are placed to the right order.


function insertionSort() {
    for (let i = 1; i<arr.length; i++) {
        let nti = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > nti) {
            arr[j+1] = arr[j];
            j = j  - 1;
        }
        arr[j+1] = nti;
    }
}

let arr = [-6, 20, 5, 20, -5, -2, 10, 3] 
insertionSort(arr)
console.log(arr) // [-6, -5, -2, 3, 5, 10, 20]

// Big-O = O(n^2) = Quadratic