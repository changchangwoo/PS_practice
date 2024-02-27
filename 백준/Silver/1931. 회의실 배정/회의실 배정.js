let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = Number(input.shift());
let answer = 1;

for (let i = 0; i < N; i++) {
  input[i] = input[i].split(" ").map(Number);
}

input.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let curEnd = input[0][1];

for (let i = 1; i < N; i++) {
  if (input[i][0] >= curEnd) {
    curEnd = input[i][1];
    answer++;
  }
}

console.log(answer);
