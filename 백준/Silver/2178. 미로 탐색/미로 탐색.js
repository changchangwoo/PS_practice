const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const graph = input.map((item) => item.split('').map(Number))
const visited = Array.from({ length: N }, () => new Array(M).fill(false))
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
const bfs = () => {
    const queue = []
    queue.push([0, 0])
    visited[0][0] = true
    let front = 0;
    while (front < queue.length) {
        const [cx, cy] = queue[front++]
        for (let i = 0; i < 4; i++) {
            let nx = cx + dx[i]
            let ny = cy + dy[i]
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (visited[nx][ny]) continue
            if (graph[nx][ny] === 0) continue;
            graph[nx][ny] = graph[cx][cy] + 1
            visited[nx][ny] = true;
            queue.push([nx, ny])
        }
    }
}

bfs();
console.log(graph[N - 1][M - 1])
