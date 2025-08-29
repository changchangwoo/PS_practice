const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

let arr = Array.from({ length: N }, (item, idx) => idx + 1);
let end = arr.length - 1;
let count = 0;
let front = 0;
while (true) {
  if (count === end) break;
  front++;
  let bottom = arr[front++];
  arr.push(bottom);
  count++;
}

console.log(arr[front]);
