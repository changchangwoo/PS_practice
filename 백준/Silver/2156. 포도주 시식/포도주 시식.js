/*
1. 포도주 잔 선택시 그 포도주 모두 마시고, 원래 위치에 놓아야함
2. 연속으로 놓인 3잔을 마실 순 없음


1 2 3


*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const N = +input.shift()
const arr = input.map(Number)

if (N < 3) {
    console.log(arr.reduce((acc, cur) => acc + cur, 0))
    return
}
arr.unshift(0)

const DP = []
DP[1] = arr[1]
DP[2] = arr[1] + arr[2]
DP[3] = Math.max(DP[2], arr[1] + arr[3], arr[2] + arr[3])
for (let i = 4; i <= N; i++) {
    DP[i] = Math.max(
        (arr[i] + DP[i - 2]),
        (arr[i] + arr[i - 1] + DP[i - 3]),
        (DP[i - 1])
    )
}
console.log(DP[N])