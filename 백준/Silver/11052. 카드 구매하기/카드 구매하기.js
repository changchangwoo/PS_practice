/*
반복문을 통해 0개 까지의 값을 미리 선언

카드개수는 피보나치 규칙과 일치
DP[i] = DP[i-1] + DP[i-2] // 카드 개수의 조건
DP[i] = Math.max(arr[i], DP[i-1] + DP[i-2])

3개 사는데 

1 5
2 4
3 3
DP[1] = arr[1]
DP[2] = math.max(arr[1]+arr[1], arr[2])
DP[3] = math.max(arr[3], DP[2]+DP[1])
DP[4] = DP[3] + DP[1], 
DP[6]
Dp[5]+DP[1],

*/

const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
arr.unshift(0);
const DP = new Array(N + 1).fill(0);

DP[1] = arr[1];
DP[2] = Math.max(arr[2], arr[1] * 2);
DP[3] = Math.max(DP[2] + DP[1], arr[3]);

for (let i = 4; i <= N; i++) {
  let idx = 1;
  let edx = i - 1;
  const stack = [];
  while (idx <= edx) {
    stack.push(DP[idx] + DP[edx]);
    idx++;
    edx--;
  }
  DP[i] = Math.max(...stack, arr[i]);
}

console.log(DP[N]);
