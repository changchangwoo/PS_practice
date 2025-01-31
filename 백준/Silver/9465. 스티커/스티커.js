/*
해당 문제는 DP[i][n-1] 어떤곳을 선택하더라도 마지막 행을 선택할 수 있음
이를 통해 마지막행이 최댓값이 되는 점화식을 도출할 수 있다

*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const T = Number(input.shift())
for(let i = 0; i < T; i++) {
    const N = Number(input.shift())
    const DP = Array.from({length : 2}, () => new Array(N).fill(0))
    const stickers = []
    const arr1 = input.shift().trim().split(' ').map(Number)
    const arr2 = input.shift().trim().split(' ').map(Number)
    arr1.unshift(0)
    arr2.unshift(0)
    stickers.push(arr1, arr2)
    DP[0][1] = stickers[0][1]
    DP[1][1] = stickers[1][1]

    for(let i = 2; i <= N; i++) {
        DP[0][i] = Math.max(DP[1][i-1], DP[1][i-2]) + stickers[0][i]
        DP[1][i] = Math.max(DP[0][i-1], DP[0][i-2]) + stickers[1][i]
    }

    console.log(Math.max(DP[1][N], DP[0][N]))

}
