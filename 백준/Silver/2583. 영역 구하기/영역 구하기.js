/*
남은 넓이, 총 개수를 구하는 것 => 뒤집혀 있으나 없으나 계산은 똑같음
겹치는거 생각 안해도됨, 남은 넓이를 구하는거라
*/
const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const [M, N, K] = input.shift().split(' ').map(Number)
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
const graph = Array.from({ length: M }, () => new Array(N).fill(0))
const visited = Array.from({ length: M }, () => new Array(N).fill(false))
input.forEach(el => {
    const [sx, sy, ex, ey] = el.split(' ').map(Number)
    for (let i = sy; i < ey; i++) {
        for (let j = sx; j < ex; j++) {
            graph[i][j] = 1
        }
    }
});


const bfs = (x, y) => {
    const queue = []
    let count = 0;
    queue.push([x, y])
    while (queue.length > 0) {
        let [cx, cy] = queue.pop();
        for (let i = 0; i < 4; i++) {
            let nx = cx + dx[i]
            let ny = cy + dy[i]
            if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue
            if (graph[nx][ny] === 1 || visited[nx][ny]) continue
            visited[nx][ny] = true
            queue.push([nx, ny])
            count++;
        }
    }
    return count
}

let answer = 0;
let answers = []
for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (visited[i][j] === false && graph[i][j] === 0) {
            answer++;
            let count = bfs(i, j)
            answers.push(count === 0 ? 1 : count)
        }
    }
}

console.log(answer)
console.log(answers.sort((a, b) => a - b).join(' '))