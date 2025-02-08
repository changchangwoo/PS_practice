/*
상하좌우로 이동할 수 없음 반드시 내려가야함
우측으로, 하단으로, 우측하단으로 3가지의 조건이 있다
=> 좌측으로는 못감 그니까 현명한 판단해야함
=> 결국 마지막 [N, M]까지 이동해야한다.
=>DP[N][M] = DP[N][M-1], DP[N-1][M-1], DP[N-1][M]중 최댓값 + ARR[N][M] + 1
전체 순회하면서 해당 조건으로 Math.max를 갱신?
*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.map((line) => line.split(" ").map(Number))
const DP = Array.from({length: N}, () => new Array(M).fill(0))
DP[0][0] = arr[0][0]
for(let i = 0; i < N; i++)
 {
    for(let j =0; j < M; j++) {
        if(i === 0 && j === 0) continue
        if(i === 0) {
            DP[i][j] = Math.max(DP[i][j-1]) + arr[i][j]
            continue
        }
        if(j === 0) {
            DP[i][j] = Math.max(DP[i-1][j]) + arr[i][j]
            continue
        }
         DP[i][j] = Math.max(DP[i-1][j-1], DP[i][j-1], DP[i-1][j]) + arr[i][j]
    }
 }

 console.log(DP[N-1][M-1])