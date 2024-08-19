// It is problem of mathematical puzzle where we have three rods of number of disks of various size.
// The objective of the puzzle is to move the entire stack to the last one.
// * Only one disk may be moved at a time.
// * Each move consist of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod. And lastly,
// * No disk may be placed on top of a disk that is smaller.

// Algorithm:
// Shift 'n-1' from 'A' to 'B' using 'C'
// Shift last disk from 'A' to 'C'
// Shit 'n-1' from 'B' to 'C' using 'A'

function towerofhanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move 1 disk from ${fromRod} to ${toRod}`)
        return 
    }

    towerofhanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerofhanoi(n-1, usingRod, toRod, fromRod)
}

towerofhanoi(3, 'A', 'B', 'C')

// Big-O = 2^n-1