// Problem => Given an array of 'n' elements and target element 't', find the index value of 't' in the array. Return -1 if not in an array.
// array = [-5, 2, 10, 4 , 6], target value = 10, OP: 2
// array = [-5, 2, 10, 4 , 6], target value = 6, OP: 4
// array = [-5, 2, 10, 4 , 6], target value = 11, OP: -1

function linearSearch(n, t) {
    for (let i=0; i<n.length; i++) {
        if (n[i] === t) {
            return i;
        }
    }
    return -1
}

let n = [-5, 2, 10, 4 , 6]
// linearSearch(n, 10)
console.log(linearSearch(n, 10))


// Big-O = O(n)