
const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const N = +input.shift()
const arr = input.shift().split(' ').map(Number)

const dp = []
dp[0] = 1
for(let i = 1 ; i < N; i++) {
    let max = 1
    for(let j = 0; j < i; j++) {
        if(arr[i] > arr[j]) {
            max = Math.max(dp[j] + 1, max)
        }
    }
    dp[i] = max
}
console.log(Math.max(...dp))