/*

DP[2][0] = DP[1][0] + k
DP[2][1] = Max(DP[1][0], DP[1][1]) + k
DP[2][2] = DP[1][2] + k

*/

function solution(triangle) {
    var answer = 0;
    const len = triangle.length;
    const DP = Array.from({length : len}, () => new Array())
    DP[0][0] = triangle[0][0]
    DP[1][0] = DP[0][0] + triangle[1][0]
    DP[1][1] = DP[0][0] + triangle[1][1]
    for(let i = 2; i < len; i++) {
        DP[i][0] = DP[i-1][0] + triangle[i][0]
        DP[i][i] = DP[i-1][i-1] + triangle[i][i]
        for(let j = 1; j < triangle[i].length - 1; j++) {
            DP[i][j] = Math.max(DP[i-1][j-1], DP[i-1][j]) + triangle[i][j]
        }
    }
    return Math.max(...DP[len-1])
}