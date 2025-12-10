const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const hash = new Map();
const answers = []
for (let i = 0; i < N; i++) {
    hash.set(input[i], true)
}
input.splice(0, N)
for (let j = 0; j < M; j++) {
    if (hash.get(input[j])) {
        answers.push(input[j])
    }
}
console.log(answers.length)
if (answers.length === 0) {
    return
}
console.log(answers.sort().join("\n"))