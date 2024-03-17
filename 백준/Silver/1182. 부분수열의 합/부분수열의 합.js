// 조건1. 중복 안됨

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, S] = input.shift().split(" ").map(Number);
const nums = input.shift().split(" ").map(Number);
const visited = Array(N + 1).fill(false);
const result = [];
let count = 0;

function backTracking(num) {
  if (checkResult(result)) count++;
  for (let i = 0; i < N; i++) {
    if (!visited[i] && i >= num) {
      visited[i] = true;
      result.push(nums[i]);
      backTracking(i);
      visited[i] = false;
      result.pop();
    }
  }
}

backTracking(0);

function checkResult(result) {
  let sum = 0;
  if (result.length === 0) return false;
  for (value of result) {
    sum += value;
  }
  if (sum === S) return true;
  else false;
}

console.log(count);
