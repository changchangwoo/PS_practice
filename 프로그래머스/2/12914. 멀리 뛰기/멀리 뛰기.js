function solution(n) {
    if(n === 1) return 1
    if(n === 2) return 2
    const DP = new Array(n+1).fill(0)
    DP[1] = 1;
    DP[2] = 2;
    for(let i = 3; i <=n; i++) {
        DP[i] = (DP[i-1]+DP[i-2])% 1234567
    }
    return DP[n] 
}
