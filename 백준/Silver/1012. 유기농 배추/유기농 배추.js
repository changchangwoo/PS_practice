let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const N = Number(input.shift());

const BFS = (startX, startY, arr, visited, M, N) => {
  const queue = [];
  queue.push([startX, startY]);
  visited[startX][startY] = true;
  while (queue.length > 0) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];

      if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
      if (arr[nx][ny] === 0) continue;
      if (visited[nx][ny] === true) continue;
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
};

for (let i = 0; i < N; i++) {
  let answer = 0;
  const [M, N, K] = input.shift().split(" ").map(Number);
  const arr = Array.from({ length: N }, () => new Array(M).fill(0));
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  for (let i = 0; i < K; i++) {
    const [X, Y] = input.shift().split(" ").map(Number);
    arr[Y][X] = 1;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 1 && visited[i][j] === false) {
        BFS(i, j, arr, visited, N, M);
        answer++;
      }
    }
  }
  console.log(answer);
}
