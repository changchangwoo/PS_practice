const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = +input.shift()
const MD = 10007;
const dp = Array.from({ length: N + 1 }, () => new Array(10).fill(0))
for (let i = 0; i <= 9; i++) dp[1][i] = 1

for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= 9; j++) {
        for (let k = 0; k <= j; k++) {
            dp[i][j] = (dp[i][j] + dp[i - 1][k]) % MD;
        }
    }
}

console.log(dp[N].reduce((acc, cur) => acc + cur, 0) % MD)