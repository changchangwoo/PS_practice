/*
경로의 개수를 구하는 것 => 탐색이 아닌 DP
DP[0][0] = 1
이전 값에서 올 수 있는 방향이 1개 => 이전 DP 값 그대로
이전 값에서 올 수 있는 방향이 2개 => 이전 DP 값 + 1

*/

function solution(m, n, puddles) {
    var answer = 0;
    const DP = Array.from({length : n}, () => new Array(m).fill(0))
    for(const [x, y] of puddles) {
        DP[y-1][x-1] = -1
    }
    
    DP[0][0] = 1
    for(let i = 0; i < n; i++) {
        for(let j =0; j < m; j++) {
            if(i === 0 && j === 0) continue;
            if(DP[i][j] === -1) {
                DP[i][j] = 0
                continue
            }            
            const up = i > 0 ? DP[i-1][j] : 0
            const left = j > 0 ? DP[i][j-1] : 0
            
            DP[i][j] = (up + left) % 1000000007;
        }
    }
    return DP[n-1][m-1]
}