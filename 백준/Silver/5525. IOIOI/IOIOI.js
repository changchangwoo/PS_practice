const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = +input.shift()
const M = +input.shift();
const arr = input.shift();
const key = "I" + "OI".repeat(N)
let answer = 0;
for (let i = 0; i <= arr.length - ((N * 2) + 1); i++) {
    let slice = arr.slice(i, i + (N * 2) + 1)
    if (slice === key) answer++;
}
console.log(answer)