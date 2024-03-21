const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const visited = Array.from({ length: N }, () => Array(M).fill(false))
const graph = input.map(l => l.split(' ').map(Number))
const dx = [0, 0, -1, 1]
const dy = [-1, 1, 0, 0]
const queue = []
const result = []

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (graph[i][j] === 1 && !visited[i][j]) {
            visited[i][j] = true
            queue.push([j, i])
            let count = bfs()
            result.push(count)
        }
    }
}

function bfs() {
    let count = 0
    while (queue.length > 0) {
        let [curX, curY] = queue.shift()
        count++
        for (let i = 0; i < 4; i++) {
            let nX = curX + dx[i]
            let nY = curY + dy[i]
            if (nX >= 0 && nX < M && nY >= 0 && nY < N && graph[nY][nX] === 1 && !visited[nY][nX]) {
                queue.push([nX, nY])
                visited[nY][nX] = true
            }
        }
    }
    return count
}

if (result.length > 0) {
    console.log([result.length, Math.max(...result)].join('\n'))
} else {
    console.log([0, 0].join('\n'))
}
