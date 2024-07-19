// Power of 2 
// n = 8 
// if the reminder is not 0 in any step 'n' is not a power of two.
// if the reminder is 0 and 'n' comes down to 1 eventually, n is a power of two.

// function isPowerOfTwo(n) {

//     if (n < 1) {
//         return false;
//     }

//     while ( n > 1 ) {
//         if ( n % 2 === 1 ) {
//             return false;
//         }
//         n /= 2
//     }
//     return true;
// }

// console.log(isPowerOfTwo(2)) // true
// console.log(isPowerOfTwo(5)) // false


// Big-O = O(logn) => Input size is reduced by half;


function isPowerofTwoBitwise(n) {
    if (n < 1 ) { return false}
    console.log((n & (n-1)) === 0)
}

isPowerofTwoBitwise(8)
isPowerofTwoBitwise(5)

// Big-O = O(1) -> Constant only one input taken