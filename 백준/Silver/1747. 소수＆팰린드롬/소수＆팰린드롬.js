let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let N = Number(input[0])
let primeNum = []

let arr = new Array(1003002).fill(true).fill(false, 0, 2)

function checkPell(pell, num) {
    for(let i = 0; i < num; i++ ) {
        if(pell[i] != pell[pell.length-i-1]) return false
    }
    return true
}

for (let i = 2; i <= Math.sqrt(arr.length); i++) {
    if (arr[i]) {
        for (let j = i * i; j <= arr.length; j = j + i) {
            arr[j] = false
        }
    }
}

for(let i = N; i < arr.length; i++) {
    if(arr[i] === true) primeNum.push(i)
}

for(let i = 0; i < primeNum.length; i++) {
    let pellCheck = primeNum[i].toString()
    if(pellCheck.length === 1) {
        console.log(primeNum[i])
        break
    }
    let tf = checkPell(pellCheck, Math.floor(pellCheck.length/2))
    if(tf === true) {
        console.log(primeNum[i])
        break
    }
}