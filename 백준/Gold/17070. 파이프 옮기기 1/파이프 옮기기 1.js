const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = +input.shift()
const arr = input.map((item) => item.split(' ').map(Number))
const dp = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }, () => new Array(3).fill(0)))
dp[0][1][0] = 1
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        // if (i === 0 && j === 1) continue;
        if (arr[i][j] === 1) continue;
        if (i === 0 && j > 1) dp[i][j][0] += dp[i][j - 1][0]
        if (j === 0 && i > 0) dp[i][j][1] += dp[i - 1][j][1]
        if (i > 0 && j > 0) {
            dp[i][j][0] += dp[i][j - 1][0] + dp[i][j - 1][2]
            dp[i][j][1] += dp[i - 1][j][1] + dp[i - 1][j][2]
            if (arr[i - 1][j] === 0 && arr[i][j - 1] === 0) {
                dp[i][j][2] += dp[i - 1][j - 1][0] + dp[i - 1][j - 1][1] + dp[i - 1][j - 1][2]
            }
        }
    }
}
console.log(dp[N - 1][N - 1][0] + dp[N - 1][N - 1][1] + dp[N - 1][N - 1][2])