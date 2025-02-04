const input = require("fs").readFileSync("./dev/stdin").toString().split("\n");
const N = Number(input.shift());
const arr = input.map((el) => el.split(" ").map((el) => Number(el)));
let answer = 1;

const sortArr = arr.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else {
    return a[0] - b[0];
  }
});

curTime = sortArr[0][1];

for (let i = 1; i < N; i++) {
  if (sortArr[i][0] >= curTime) {
    curTime = sortArr[i][1];
    answer++;
  }
}

console.log(answer);