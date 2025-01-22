const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const stack = [];
let answer = 0;
const arr = input.shift().split(" ").map(Number);

for (let i = 0; i < M; i++) {
  if (stack.length < N && !stack.includes(arr[i])) {
    stack.push(arr[i]);
  } else if (stack.length >= N && !stack.includes(arr[i])) {
    let tempArr = [];
    for (let j = i + 1; j < M; j++) {
      if (stack.includes(arr[j]) && !tempArr.includes(arr[j]))
        tempArr.push(arr[j]);
    }
    for (let item of stack) {
      if (!tempArr.includes(item)) tempArr.push(item);
    }
    let removeItem = tempArr.pop();
    let removeIdx = stack.indexOf(removeItem);
    stack.splice(removeIdx, 1);
    stack.push(arr[i]);
    answer++;
  }
}

console.log(answer);