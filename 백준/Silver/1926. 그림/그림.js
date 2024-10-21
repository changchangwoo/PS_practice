let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number)
const graph = []
for(let i = 1; i <= N; i++) {
    graph.push(input[i].split(' ').map(Number))
}

const arr = []
const visited = Array.from({length : N}, () => new Array(M).fill(false))
const dx = [0, 0, -1, 1]
const dy = [-1, 1, 0, 0]

const bfs = (px, py, psize) => {
    const queue = []
    let size = psize
    queue.push([px, py])
    visited[px][py] = true
    while(queue.length > 0) {
        let [x, y] = queue.shift()
        for(let i = 0; i < 4; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]

            if(nx < 0 || nx >= N || ny < 0 || ny >= M) continue
            if(visited[nx][ny] === true || graph[nx][ny] === 0) continue

            visited[nx][ny] = true
            size++;
            graph[nx][ny] = size
            queue.push([nx, ny])
        }
    }

    return size
}

let answer = 0
let sizeArr = []
for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        if(visited[i][j] === false && graph[i][j] !== 0) {
            sizeArr.push(bfs(i, j, 1))
            answer++;
        }
    }
}
console.log(answer)
console.log(sizeArr.length === 0 ? 0 :Math.max(...sizeArr))