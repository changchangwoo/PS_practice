const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
for (let i = 0; i < N; i++) {
  input[i] = Number(input[i]);
  const dp = new Array(41).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  function fibonacci(num) {
    if (num === 0 || num === 1 || num === 2) {
      return 1;
    }
    if (dp[num] != 0) return dp[num];
    dp[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return dp[num];
  }

  fibonacci(input[i]);
  if (input[i] === 0) {
    console.log(1, 0);
  } else console.log(dp[input[i] - 1], dp[input[i]]);
}
