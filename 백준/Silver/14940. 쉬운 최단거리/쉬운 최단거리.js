const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let [targetX, targetY] = [0, 0];

for (let i = 0; i < N; i++) {
  input[i] = input[i].split(" ").map(Number);
  if (input[i].indexOf(2) !== -1) {
    [targetX, targetY] = [input[i].indexOf(2), i];
  }
}

bfs(targetX, targetY, visited);

function bfs(x, y, visited) {
  const queue = [];
  queue.push([x, y]);
  input[y][x] = 0;
  visited[y][x] = true;
  while (queue.length > 0) {
    let [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];
      if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
      if (input[ny][nx] === 0) continue;
      if (!visited[ny][nx]) {
        visited[ny][nx] = true;
        input[ny][nx] = input[cy][cx] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j] === false && input[i][j] === 1) {
      input[i][j] = -1;
    }
  }
}

for (let i = 0; i < N; i++) {
  console.log(input[i].join(" "));
}
