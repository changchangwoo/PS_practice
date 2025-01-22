let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim());
const T = input.shift();
const answer = [];
for (let i = 0; i < T; i++) {
  let N = input.shift();
  let arr = [];
  let flag = false;
  let hash = new Map();
  for (let j = 0; j < N; j++) {
    arr.push(input[j]);
    hash.set(input[j], true);
  }

  for (let k = 0; k < N; k++) {
    let element = arr[k];
    for (let t = 0; t < element.length; t++) {
      let str = element.slice(0, t);
      if (hash.get(str)) {
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  if (!flag) answer.push("YES");
  if (flag) answer.push("NO");
  input = input.slice(N);
}

console.log(answer.join("\n"));