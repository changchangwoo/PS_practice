

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')

const N = Number(input.shift());
const arr = input.map((item) => item.split(' ').map(Number))
const DP = Array.from({ length: N }, () => new Array(3).fill(0))
DP[0][0] = arr[0][0]
DP[0][1] = arr[0][1]
DP[0][2] = arr[0][2]
for (let i = 1; i < N; i++) {
    DP[i][0] = Math.min(DP[i - 1][1], DP[i - 1][2]) + arr[i][0]
    DP[i][1] = Math.min(DP[i - 1][0], DP[i - 1][2]) + arr[i][1]
    DP[i][2] = Math.min(DP[i - 1][0], DP[i - 1][1]) + arr[i][2]
}

console.log(Math.min(DP[N - 1][0], DP[N - 1][1], DP[N - 1][2]))