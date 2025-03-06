/*
수열은 비 내림차순
길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.

*/

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
const answers = [];

const sortedArr = arr.sort((a, b) => a - b);
const dfsArr = [];
const dfs = (idx) => {
  if (dfsArr.length === M) {
    let str = dfsArr.join(" ");
    if (!answers.includes(str)) answers.push(str);
    return;
  }
  for (let i = idx; i < N; i++) {
    dfsArr.push(sortedArr[i]);
    dfs(i);
    dfsArr.pop();
  }
};
dfs(0);
console.log(answers.join("\n"));