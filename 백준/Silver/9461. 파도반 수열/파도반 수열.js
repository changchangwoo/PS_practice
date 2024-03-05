const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
for (let i = 0; i < N; i++) {
  const dp = new Array(101).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  dp[4] = 2;
  dp[5] = 2;
  dp[6] = 3;
  for (let j = 7; j <= input[i]; j++) {
    dp[j] = dp[j - 1] + dp[j - 5];
  }
  console.log(dp[+input[i]]);
}
