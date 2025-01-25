/*
BFS
O = 빈공간
X = 벽
I = 도연이 (스타트지점)
P = 사람
아무도 못만난 경우 TT 출력
BFS 돌면서 P 개수 추적
*/

let input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const graph = input.map(line => line.trim().split(''))
const visited = Array.from({length : N}, () => new Array(M).fill(false))
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
let answer = 0;
let startX, startY;
for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        if(graph[i][j] === "I") {
            startX = i
            startY = j
        } 
    }
}

const bfs = (x, y) => {
    visited[x][y] = true
    const queue = []
    queue.push([x, y])
    while(queue.length > 0) {
        let [px, py] = queue.shift();
        for(let i = 0; i < 4; i++) {
            let nx = px + dx[i]
            let ny = py + dy[i]
            if(nx < 0 || nx >= N || ny < 0 || ny >= M || visited[nx][ny] === true ||
                graph[nx][ny] === "X"
            ) continue;
            if(graph[nx][ny] === "P") answer++;
            visited[nx][ny] = true
            queue.push([nx, ny])
        
        }

    }
}

bfs(startX, startY)
if(answer === 0) answer = "TT"

console.log(answer)