let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let graph = input.map((data) => data.split(" ").map(Number));
let visited = Array.from({ length: M }, () => Array(N).fill(false));
let queue = []
let max = 0;
let flag = 0;
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] === 1) {
            queue.push([i,j])
            visited[i][j] = true
        }
    }
}

function bfs() {
    let front = 0;
    let rear = queue.length;
    while (front < rear) {
        let [x, y] = queue[front++];
        visited[x][y] = true

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
            if (visited[nx][ny] || graph[nx][ny] === -1) continue;
            else {
                visited[nx][ny] = true;
                graph[nx][ny] = graph[x][y] + 1;
                queue[rear++] = [nx, ny];
            }
        }
    }
}

bfs();

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] === 0) {
            flag = 1;
            break;
        }
        if (flag === 1) break;
        if (graph[i][j] > max) max = graph[i][j];
    }
}

if (flag === 1) console.log(-1);
else console.log(max - 1);