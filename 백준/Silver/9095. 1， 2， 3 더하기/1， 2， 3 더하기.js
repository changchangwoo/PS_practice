const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
for (let i = 0; i < N; i++) {
  const dp = new Array(101).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  dp[4] = 7;
  for (let j = 4; j <= +input[i]; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }
  console.log(dp[+input[i]]);
}
