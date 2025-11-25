
const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const N = Number(input.shift());
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
const visited = Array.from({ length: N }, () => new Array(N).fill(false))
const graph = []
for (let i = 0; i < N; i++) {
    graph.push(input[i].split('').map(Number))
}

const bfs = (x, y) => {
    let count = 1;
    const queue = []
    visited[x][y] = true
    queue.push([x, y])
    while (queue.length > 0) {
        let [cx, cy] = queue.pop();
        for (let i = 0; i < 4; i++) {
            let nx = cx + dx[i]
            let ny = cy + dy[i]
            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (visited[nx][ny]) continue
            if (graph[nx][ny] === 0) continue
            visited[nx][ny] = true
            count++;
            queue.push([nx, ny])
        }
    }
    return count
}
const answers = []
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j] && graph[i][j] === 1) {
            answers.push(bfs(i, j));
        }
    }
}

console.log(answers.length)
if (answers.length > 0) console.log(answers.sort((a, b) => a - b).join('\n'))
else console.log(0)