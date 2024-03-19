const N = Number(require('fs').readFileSync("/dev/stdin").toString().trim())
let dp = []
dp[1] = 1
dp[2] = 3
dp[3] = 5
for(let i = 3; i <= N; i++) {
    dp[i] = (2*dp[i-2] + dp[i-1]) % 10007
}
console.log(dp[N])