const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number)
const stackSum = []
const answer = []

let sum = 0
for (let i = 0; i < N; i++) {
    sum = arr[i] + sum
    stackSum[i] = sum
}

for (let j = 0; j < M; j++) {
    const [start, end] = input[j].split(' ').map(Number)
    if (start >= 2) answer.push(stackSum[end - 1] - stackSum[start - 2])
    else answer.push(stackSum[end-1])

}
console.log(answer.join('\n'))