const input = Number(require('fs').readFileSync("../input.txt").toString().trim())

const dp = []
dp[1] = 0
for (let i = 2; i < input+1; i++) {
    dp[i] = dp[i - 1] + 1
    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[Math.floor(i / 2)] + 1)
    } else if (i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[Math.floor(i / 3)] + 1)
    } else if (i % 5 === 0) {
        dp[i] = Math.min(dp[i], dp[Math.floor(i / 5)] + 1)

    }
}

console.log(dp)