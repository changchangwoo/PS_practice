/*
지문에 대한 생각
1. 항상 앞선 수가 최소 주사위의 수인가?
=> 해당하는 경우라면 중복방문 필요 X
=> 뭔가 그런 것 같은데 왜 그런지 확답을 못내리겠음

*/
const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = [];
const visited = new Array(101).fill(false);
const dp = new Array(101).fill(Infinity);
for (let i = 0; i <= 100; i++) {
  graph.push(i);
}
input.map((item) => {
  const [start, end] = item.split(" ").map(Number);
  graph[start] = end;
});

const bfs = () => {
  const queue = [];
  queue.push([1, 1]);
  visited[1] = true;
  while (queue.length > 0) {
    let [curX, diceCount] = queue.shift();
    for (let i = 1; i <= 6; i++) {
      let next = curX + i;
      if (next > 100) break;
      if (!visited[next]) {
        visited[next] = true;
        queue.push([graph[next], diceCount + 1]);
        dp[next] = diceCount;
      }
    }
  }
};

bfs();

console.log(dp[100]);
