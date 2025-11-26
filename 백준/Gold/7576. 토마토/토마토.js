const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [M, N] = input.shift().split(' ').map(Number)
const visited = Array.from({ length: N }, () => new Array(M).fill(false))
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

const init = [];
const graph = input.map((item, idx) =>
    item.split(' ').map((d_item, d_idx) => {
        if (d_item === "1") init.push([idx, d_idx])
        return Number(d_item)
    })
)

const bfs = () => {
    let count = 0;
    let front = 0;
    const queue = []
    init.forEach(element => {
        const [el, ex] = element
        visited[el][ex] = true
        queue.push(element)
    });
    while (front < queue.length) {
        let [cx, cy] = queue[front++];
        for (let i = 0; i < 4; i++) {
            let nx = cx + dx[i]
            let ny = cy + dy[i]
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
            if (visited[nx][ny]) continue
            if (graph[nx][ny] === -1) continue;
            visited[nx][ny] = true
            graph[nx][ny] = graph[cx][cy] + 1;
            queue.push([nx, ny])
            count++;
        }
    }
    return count;
}

const count = bfs();

let max = 0;
for (let line of graph) {
    max = Math.max(max, ...line);
    for (let item of line) {
        if (item === 0) {
            console.log(-1)
            return
        }
    }
}
if (count === 0) {
    console.log(0)
    return
}
console.log(max - 1)