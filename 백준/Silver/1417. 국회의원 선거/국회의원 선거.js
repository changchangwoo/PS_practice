let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let N = input.shift();
let dasom = input.shift();
if (N === 1) return console.log(0);
let answer = 0;
while (true) {
  input.sort((a, b) => b - a);
  let max = input.shift();
  if (max < dasom) break;
  dasom++;
  answer++;
  input.push(max - 1);
}
console.log(answer);