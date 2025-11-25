const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(" ").map(Number));
}
const adjArr = adjMatrix(arr, N);
const visitedBFS = new Array(N + 1).fill(false);
const visitedDFS = new Array(N + 1).fill(false);
const bfsArr = [];
const dfsArr = [];

for (let i = 1; i < adjArr.length; i++) {
  adjArr[i].sort((a, b) => a - b);
}

function adjMatrix(arr, N) {
  const adjArr = Array.from({ length: N + 1 }, () => []);
  arr.forEach((element) => {
    const [from, to] = element;
    adjArr[to].push(from);
    adjArr[from].push(to);
  });
  return adjArr;
}

function bfs(v) {
  const queue = [];
  queue.push(v);
  visitedBFS[v] = true;
  while (queue.length > 0) {
    const cur = queue.shift();
    bfsArr.push(cur);
    for (let next of adjArr[cur]) {
      if (!visitedBFS[next]) {
        queue.push(next);
        visitedBFS[next] = true;
      }
    }
  }
}

function dfs(v) {
  visitedDFS[v] = true;
  dfsArr.push(v);
  for (let next of adjArr[v]) {
    if (!visitedDFS[next]) dfs(next);
  }
}

bfs(V);
dfs(V);

console.log(dfsArr.join(" "));
console.log(bfsArr.join(" "));
