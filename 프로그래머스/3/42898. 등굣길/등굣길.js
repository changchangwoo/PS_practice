/*
도착 지점을 기준으로 좌측에서 오거나 상단에서 올 수 있음
*/
function solution(m, n, puddles) {
    var answer = 0;
    const MOD = 1000000007
    const dp = Array.from({length : n+1}, () => new Array(m+1).fill(0))
    const hash = new Map();
    for(const [px, py] of puddles) {
       hash.set(`${py} ${px}`, true)
    }
    
    dp[1][1] = 1
    for(let i = 1 ; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(hash.get(`${i} ${j}`)) continue;

            // 이전 위치가 벽인 경우
            if(i === 1 && j > 1) dp[i][j] += dp[i][j-1] % MOD 
            if(j === 1 && i > 1) dp[i][j] += dp[i-1][j] % MOD
            if(i > 1 && j > 1) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1] % MOD                
            }
            
        }
    }
    return dp[n][m] % MOD;
}

