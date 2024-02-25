let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
let [N, M] = input[0].split(' ').map(Number)
let hash = new Map()
let arr = []
input.shift()
for(let i = 0; i < N; i++) {
    hash.set(input[i].trim(), i+1)
    arr.push(input[i].trim())
}
input = input.slice(N, N+M)

for(let i = 0; i < +M; i++) {
    if(isNaN(input[i]) === true) {
        console.log(hash.get(input[i].toString().trim()))
    }
    else {
        console.log(arr[+input[i]-1])
    }
}