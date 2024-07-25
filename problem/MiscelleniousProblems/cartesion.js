function cartesian(a, b) {
    let c = [];
    
    for(let i=0; i<a.length; i++) {
        for(let j=0; j<b.length; j++) {
            c.push([a[i], b[j]])
        }
    }
    return c;
}

let a = [1, 2]
let b = [3, 4]

console.log(cartesian(a, b)) // [ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ]

// Big-O = O(n^2)
// Big-O = O(mn) -> If the array is not in the same no.of.elements it will took O(mn)
// for example -> a = [1, 2], b = [3, 4, 5]
// OP: [ [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]