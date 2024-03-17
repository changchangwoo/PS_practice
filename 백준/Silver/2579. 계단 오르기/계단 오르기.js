const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input.shift());
const stairs = input.map(Number);
const dp = []

// 마지막 계단을 기준으로 했을 떄 마지막 계단은 한칸전, 두칸전 밖에 없음
// 근데 한칸 전에 왔으면 반드시 이전에는 두 칸 전에 와야함

dp[0] = stairs[0]
dp[1] = Math.max(stairs[0]+stairs[1], stairs[1])
dp[2] = Math.max(stairs[2] + stairs[1], stairs[0] + stairs[2])
for(let i = 3; i < N; i++) {
dp[i] = Math.max(stairs[i] + stairs[i-1] + dp[i-3], stairs[i] + dp[i - 2])
}
// 점화식은 답지를 보고 참고했으니 다시풀자......
console.log(dp[N-1])