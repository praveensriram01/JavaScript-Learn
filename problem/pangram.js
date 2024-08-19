function pangram(str) {

    let clean = str.toLowerCase().replace(/[^a-z]/g,'')
    let unique = new Set(clean)
    if (unique.size === 26) {
        return "pangram";
    } else {
        return "not a pangran"
    }
}

let str1 = 'The quick brown fox jumps over the lazy dog' // pangram
let str = 'abc' // not a pangram

console.log(pangram(str1)); // 