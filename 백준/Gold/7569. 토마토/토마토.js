const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M, H] = input.shift().split(" ").map(Number);
const wholeTomatos = [];
const startTomatos = [];

const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];
const queue = [];

const visiteds = new Array(H)
  .fill(0)
  .map(() => new Array(M).fill(0).map(() => new Array(N).fill(false)));

for (let i = 0; i < H; i++) {
  let temp = [];
  for (let j = 0; j < M; j++) {
    let temp2 = [];
    const row = input[j].split(" ").map(Number);
    for (let k = 0; k < N; k++) {
      if (row[k] === 1) {
        queue.push([i, j, k]);
        visiteds[i][j][k] = true;
      }
      temp2.push(row[k]);
    }
    temp.push(temp2);
  }
  wholeTomatos.push(temp);
  input.splice(0, M);
}

bfs();

function bfs() {
  let front = 0;
  let rear = queue.length;
  while (front < rear) {
    let [curZ, curY, curX] = queue[front++];
    for (let i = 0; i < 6; i++) {
      let nx = curX + dx[i];
      let ny = curY + dy[i];
      let nz = curZ + dz[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M || nz < 0 || nz >= H) continue;
      if (wholeTomatos[nz][ny][nx] != 0 || visiteds[nz][ny][nx]) continue;
      wholeTomatos[nz][ny][nx] = wholeTomatos[curZ][curY][curX] + 1;
      visiteds[nz][ny][nx] = true;
      queue[rear++] = [nz, ny, nx];
    }
  }
}

let max = 0;
for (let i = 0; i < wholeTomatos.length; i++) {
  for (let j = 0; j < wholeTomatos[i].length; j++) {
    for (let k = 0; k < wholeTomatos[i][j].length; k++) {
      if (wholeTomatos[i][j][k] > max) max = wholeTomatos[i][j][k];
      if (wholeTomatos[i][j][k] === 0) {
        console.log(-1);
        return;
      }
    }
  }
}

console.log(max - 1);
