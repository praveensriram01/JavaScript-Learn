let isEven = (n) => {
    return n%2==0
}

let printResult = (evenFn, num) => {
    const isNumEven = evenFn(num)

    console.log(`${num} is Even? - ${isNumEven}`)
}

printResult(isEven, 21)