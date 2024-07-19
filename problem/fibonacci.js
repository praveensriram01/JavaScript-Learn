// Fibonacci Sequence

// Problem:
// Give a number 'n', find the forst 'n' elements of fibonacci sequence.


// The first two numbers in the sequence are 0 and 1.
// fibonacci(7) = [0,1,1,2,3,5,8]

function fibonacci(n) {
    const fib = [8, 13]
    for(let i=2; i<n; ++i) {
        fib[i] = fib[i - 1] + fib[i -2]
    }
    return fib
}

console.log(fibonacci(7)) //[0,1,1,2,3,5,8]


// Big-O = O(n)