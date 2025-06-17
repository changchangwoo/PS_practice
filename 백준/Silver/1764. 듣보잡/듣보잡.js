let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const Narr = input.splice(0, N);
const Marr = input.splice(0, M);
const hash = new Map();
Narr.forEach((element) => {
  element = element.trim();
  hash.set(element, hash.get(element) ? hash.get(element) + 1 : 1);
});
Marr.forEach((element) => {
  element = element.trim();
  hash.set(element, hash.get(element) ? hash.get(element) + 1 : 1);
});
const filterArr = [...hash].filter((element) => element[1] === 2).sort();
const answer = filterArr.map((item) => item[0]);
console.log(answer.length);
console.log(answer.join("\n"));
