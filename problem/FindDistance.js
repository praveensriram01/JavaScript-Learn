// Input: arr[] = {1, 2}, x = 1, y = 2
// Output: Minimum distance between 1 and 2 is 1.
// Explanation: 1 is at index 0 and 2 is at index 1, so the distance is 1

// Input: arr[] = {3, 4, 5}, x = 3, y = 5
// Output: Minimum distance between 3 and 5 is 2.
// Explanation: 3 is at index 0 and 5 is at index 2, so the distance is 2

// Input: arr[] = {3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3}, x = 3, y = 6
// Output: Minimum distance between 3 and 6 is 4.
// Explanation: 3 is at index 0 and 6 is at index 4, so the distance is 4

// Input: arr[] = {2, 5, 3, 5, 4, 4, 2, 3}, x = 3, y = 2
// Output: Minimum distance between 3 and 2 is 1.
// Explanation: 3 is at index 7 and 2 is at index 6, so the distance is 1

function FindDistance(arr, x, y) {
    let minDist = Number.MAX_VALUE
    let prev = -1

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === x || arr[i] === y) {
            if(prev !== -1 && arr[prev] !== arr[i]) {
                minDist = Math.min(minDist, i - prev)
            }
            prev = i
        }
    }

    if(minDist === Number.MAX_VALUE) {
        return -1;
    }

    return minDist;
}

let arrList = [2, 5, 3, 5, 4, 4, 2, 3]

// FindDistance(arrList, 2, 4)
console.log(FindDistance(arrList, 3, 4)) // OP: 2
console.log(FindDistance(arrList, 5, 2)) // OP: 1
console.log(FindDistance(arrList, 4, 2)) // OP: 1