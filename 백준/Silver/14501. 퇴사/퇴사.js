const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input.shift());
const arr = input.map((el) => el.split(" ").map((el) => Number(el)));
const DP = new Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  let day = arr[i][0];
  let fee = arr[i][1];
  if (i > 0) {
    DP[i] = Math.max(DP[i], DP[i - 1]);
  }
  if (i + day > N) {
    continue;
  }
  DP[i + day] = Math.max(DP[i + day], DP[i] + fee);
}
console.log(Math.max(...DP));
