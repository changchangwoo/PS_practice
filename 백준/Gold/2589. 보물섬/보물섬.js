/*
BFS로 각 경로를 전부 탐색
이후 for문으로 그냥 전부다 탐색??
*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number)
const graph = []
const visited = Array.from(({length : N}), () => new Array(M).fill(false))
const dx = [0, 0, -1, 1]
const dy = [-1, 1, 0, 0]

for(let i = 1; i <= N; i++) {
    graph.push(input[i].toString().trim().split('').map(value => {
        if(value === 'W') return 0
        else if(value ==='L') return 1
    }))
}

const bfs = (x, y, visited, graph) => {
    const queue = []
    let maxLength = 1
    queue.push([x, y])
    visited[x][y] = true
    while(queue.length > 0) {
        let [cx, cy] = queue.shift()
        for(let i = 0; i < 4; i++) {
            let nx = cx + dx[i]
            let ny = cy + dy[i]
            if(nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if(graph[nx][ny] === 0 || visited[nx][ny] === true) continue
            visited[nx][ny] = true
            graph[nx][ny] = graph[cx][cy] + 1
            if(graph[nx][ny] > maxLength) maxLength = graph[nx][ny]
            queue.push([nx, ny])
        }
    }
    return maxLength
}

const arr = []

for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        if(graph[i][j] === 1) {
            deepCopyVisited = visited.map(arr => [...arr])
            deepCopyGraph = graph.map(arr => [...arr])
            arr.push(bfs(i, j, deepCopyVisited, deepCopyGraph))
        }
    }
}

console.log(arr.length === 0 ? 0 : Math.max(...arr)-1)