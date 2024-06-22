// An Array

const arr = [0,1,2,3,4,5,6,7,8,9,10]

let evenArr = []
let oddArr = []

for(let i=0; i<arr.length; i++) {
    if(arr[i]%2==0) {
        evenArr.push(arr[i])
    }
}

for(let j=0; j<arr.length; j++) {
    if(arr[j]%2==1) {
        oddArr.push(arr[j])
    }
}

console.log(`It is Even Numbers: [${evenArr}]`)
console.log(`It is Odd Numbers: [${oddArr}]`)