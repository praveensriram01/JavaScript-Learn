// IP: arr = [1,2,3,4,6,7,8]
// OP: 5

function missingNum(arr) {
    let res = 1
    for(let i=0; i<arr.length; i++) {
        if(arr[i] != res) {
            return res
        }
        res++ 
    }
    return res;
}

let arr = [1,2,3,4,5,6,7,8,9,10,12]
console.log(missingNum(arr))
console.time(missingNum)
console.timeEnd(missingNum)


// Big-O = O(n) 
