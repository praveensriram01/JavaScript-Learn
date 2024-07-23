function fibonacci(n) {

    if (n < 2) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(0))
console.log(fibonacci(3))
console.log(fibonacci(7))

// O(n) -> Iterative
// O(2^n) -> Recursive