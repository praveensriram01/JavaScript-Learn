function sumcurried(x) {
    return function(y) {
        console.log(x+y);
    }
}

let sumofTwo = sumcurried(200)

sumofTwo(100)