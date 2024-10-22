let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim()
let N = input.split('')
const hash = new Map();
const arr = []
for(let i = 0; i < N.length; i++) {
    arr.push(N[i])
}

let ninesixCount = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '9' || arr[i] === '6') ninesixCount++
    else {
        const count = hash.get(arr[i]) || 0;
        hash.set(arr[i], count + 1);
    }
}

let hashcount = Math.max(...hash.values())
console.log(Math.max(Math.round(ninesixCount/2), hashcount))