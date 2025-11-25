const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const T = Number(input.shift());
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
const bfs = (x, y, visited, graph, N, M) => {
        const queue = [];
        queue.push([x, y])
        visited[x][y] = true
        while(queue.length > 0) {
            const [cx, cy] = queue.pop();
            for(let i = 0; i < 4; i++) {
                let nx = cx + dx[i];
                let ny = cy + dy[i];
                if(nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
                if(visited[nx][ny]) continue;
                if(graph[nx][ny] === 0) continue;
                visited[nx][ny] = true
                queue.push([nx, ny])
            }
        }
        
    }

for(let i = 0; i < T; i++) {
    const [N, M, K] = input.shift().split(' ').map(Number);
    const visited = Array.from({length: N}, () => new Array(M).fill(false))
    const arr = Array.from({length: N}, () => new Array(M).fill(0))
    let answer = 0;
    for(let i = 0; i < K; i++) {
        const [X, Y] = input.shift().split(' ').map(Number);
        arr[X][Y] = 1
    }
    for(let i = 0; i < N; i++) {
        for(let j  = 0; j < M; j++) {
            if(!visited[i][j] && arr[i][j] === 1) {
                bfs(i,j,visited,arr,N, M) 
                answer++
            }
        }
    }
    console.log(answer)
}
