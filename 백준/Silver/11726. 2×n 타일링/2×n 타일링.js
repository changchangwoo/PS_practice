const N = Number(require('fs').readFileSync("/dev/stdin").toString().trim())
const dp = [1001]
dp[1] = 1
dp[2] = 2
dp[3] = 3
for(let i = 3; i <= N; i++) {
    dp[i] = dp[i-1]+dp[i-2]
    dp[i] = dp[i]%10007
}
console.log(dp[N])