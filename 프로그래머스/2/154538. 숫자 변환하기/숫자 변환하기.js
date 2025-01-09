function solution(x, y, n) {
    const DP = new Array(y+1).fill(Infinity)
    DP[x] = 0
    for(let i = x; i <=y; i++) {
        DP[i+n] = Math.min(DP[i+n], DP[i]+1)
        DP[i*2] = Math.min(DP[i*2], DP[i]+1)
        DP[i*3] = Math.min(DP[i*3], DP[i]+1)
    }
    return DP[y] === Infinity ? -1 : DP[y]
}