const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(" ").map(Number)

const diff = []
for (let i = 0; i < arr.length - 1; i++) {
    diff.push(arr[i + 1] - arr[i])
}
const sorted_diff = diff.sort((a, b) => a - b).slice(0, N - M).reduce((acc, cur) => acc + cur, 0);
console.log(sorted_diff)