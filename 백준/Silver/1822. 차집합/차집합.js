const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const arrA = input.shift().split(' ').map(Number)
const arrB = input.shift().split(' ').map(Number)

const setA = new Set();
const setB = new Set();
const answer = []
arrA.forEach((v) => setA.add(v))
arrB.forEach((v) => setB.add(v))
for (const item of arrA) {
    if (setA.has(item) && !setB.has(item)) answer.push(item)
}
if (answer.length > 0) {
    console.log(answer.length)
    console.log(answer.sort((a, b) => a - b).join(' '))
} else {
    console.log(0)
}