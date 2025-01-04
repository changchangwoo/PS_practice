function solution(n) {
    const DP = new Array(n+1).fill(0);
    DP[0] = 0
    DP[1] = 1
    for(let i = 2; i <=n; i++) {
        DP[i] = (DP[i-2]+DP[i-1]) % 1234567;
    }
    return DP[n]
}