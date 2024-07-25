// Problem: 
// Given a Staircase of 'n' steps, count the number of distinct way to climd the top. You can either 1 step or 2 steps at a time.

// for example: 
// n = 1, ClimbingStaircase(1) = 1 | OP: (1)
// n = 2, ClimbingStaircase(2) = 2 | OP: (1, 1) or (2)
// n = 3, ClimbingStaircase(3) = 3 | OP: (1, 1, 1) or (1, 2) or (2, 1)
// n = 4, ClimbingStaircase(4) = 5 | OP: (1, 1, 1, 1) or (1, 1, 2) or (1, 2, 1) or (2, 1, 1) or (2, 2)

function climbingStaircase(n) {
    let climbing = [1, 2]
    for (let i=2; i<=n; i++) {
        climbing[i] = climbing[i-1] + climbing[i-2]
    }

    return climbing[n-1];
}

console.log(climbingStaircase(4))