// An Array

const arr = [0,1,2,-3,4,5,-6,7,8,9,-10]

// Even, Odd, Positive, Negative
const evenArr = arr.filter((i) => {
    return i%2==0
})

const oddArr = arr.filter((j) => {
    return j%2==1
})

const posArr = arr.filter((k) => {
    return k>=0
})

const negArr = arr.filter((l) => {
    return l<0
})

console.log(`It is Even Numbers: [${evenArr}]`)
console.log(`It is Odd Numbers: [${oddArr}]`)
console.log(`It is Positive Numbers: [${posArr}]`)
console.log(`It is Negative Numbers: [${negArr}]`)
