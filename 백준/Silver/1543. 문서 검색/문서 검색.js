let [docs, word] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
let index = 0;
index = docs.indexOf(word);
while (index >= 0) {
  answer++;
  docs = docs.substring(index + word.length);
  index = docs.indexOf(word);
}

console.log(answer);
