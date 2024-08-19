function lonelyinteger(arr) {
    for(let i=0; i<arr.length; i++) {
        let n = 0;
        for(let j=0; j<arr.length; j++) {
            if(arr[i] == arr[j]) {
                n++;
            }
        }
        if(n === 1) {
            return arr[i];
        }
    }
    return -1
}

arr = [1,2,3,4,3,2,1,4]

console.log(lonelyinteger(arr))