let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
let N = Number(input.shift())
let arr = []
let answer = []
for(let i = 0; i < N; i++) {
    arr.push(+input[i])
}

arr.sort((a,b) => a-b)

for(let i =0; i < N; i++) {
    answer.push(arr[i] * (N - i))
}

console.log(Math.max(...answer))