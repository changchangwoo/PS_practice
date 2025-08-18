const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = [];
const chickenArr = [];
const houseArr = [];
const answers = [];
let result = [];
const visited = new Array(chickenArr.length).fill(false);

const calcDistance = (curChickenArr) => {
  let total = 0;
  houseArr.forEach((item) => {
    let [x, y] = item;

    // console.log(x, y);
    let min = Infinity;
    curChickenArr.forEach((chicken) => {
      let [chickX, chickY] = chicken;
      sum = Math.abs(x - chickX) + Math.abs(y - chickY);
      min = Math.min(min, sum);
    });
    total += min;
  });
  return total;
};

const dfs = (prev) => {
  if (result.length === M) {
    answers.push(calcDistance(result));
    return;
  }
  for (let i = prev; i < chickenArr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(chickenArr[i]);
      dfs(i + 1);
      visited[i] = false;
      result.pop(chickenArr[i]);
    }
  }
};

for (let i = 0; i < N; i++) {
  const line = input.shift().split(" ").map(Number);
  for (let j = 0; j < line.length; j++) {
    if (line[j] === 2) chickenArr.push([i, j]);
    else if (line[j] === 1) houseArr.push([i, j]);
  }
}

if (chickenArr.length === 0) console.log(0);
else {
  dfs(0);
  console.log(Math.min(...answers));
}