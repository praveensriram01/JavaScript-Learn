// IP: [1,2,3,4,5,6,7,8,9]
// OP: 6

function search(arr, t) {

    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right)/2)
        if(t === arr[mid]) {
            return mid;
        } 
        if(t < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1;
}

let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]

// search(arr, 12)
console.log(search(arr, 56))
console.log(search(arr, 23))
console.log(search(arr, 72))