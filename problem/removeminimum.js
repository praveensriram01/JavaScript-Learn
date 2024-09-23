// Given an unsorted array, trim the array such that twice of minimum is greater than maximum in the trimmed array. 
//  Elements should be removed either end of the array. Number of removals should be minimum.

// arr[] = {4, 5, 100, 9, 10, 11, 12, 15, 200}
// Output: 4
// We need to remove 4 elements (4, 5, 100, 200)
// so that 2*min becomes more than max.


// arr[] = {4, 7, 5, 6}
// Output: 0
// We don't need to remove any element as 
// 4*2 > 7 (Note that min = 4, max = 8)

// arr[] = {20, 7, 5, 6}
// Output: 1
// We need to remove 20 so that 2*min becomes
// more than max

// arr[] = {20, 4, 1, 3}
// Output: 3
// We need to remove any three elements from ends
// like 20, 4, 1 or 4, 1, 3 or 20, 3, 1 or 20, 4, 1

function min(arr, l, h) {
    
    let mn = arr[l]

    for(let i=l+1; i<=h; i++) {
        if(mn > arr[i]) 
            mn = arr[i]
    }
    return mn;
}

function max(arr, l, h) {
    
    let mx = arr[l]

    for(let i=l+1; i<=h; i++) {
        if(mx < arr[i])
            mx = arr[i]
    }
    return mx
}

function minRemoves(arr, l, h) {

    if(l >= h) 
        return 0;

    let mn = min(arr, l, h)
    let mx = max(arr, l, h)

    if(2*mn > mx)
        return 0;

    return Math.min(minRemoves(arr, l+1, h), minRemoves(arr, l, h-1)) + 1;
}


let arr = [4, 5, 100, 9, 10, 11, 12, 15, 200]
let l = 0
let h = arr.length

console.log(minRemoves(arr, l, h))

