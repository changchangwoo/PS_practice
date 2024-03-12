// 바이러스는 2, 2에서부터 상,하,좌,우로 퍼진다
// 1은 벽 1이 있는 경우에는 바이러스가 퍼지지 않는다
// 벽은 새로 3개 세울 수 있다
// 기본적인 로직은 일반 bfs와 동일하지만 벽을 어떻게 세울까가 문제의 핵심
// 시간은 2초고 N, M의 크기는 매우 작다 => 그냥 완탐으로 일단 벽부터 다 세울까

const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const rootQueue = []
const dx = [0, 0, -1, 1]
const dy = [-1, 1, 0, 0]
const result = []
let max = 0

for (let i = 0; i < N; i++) {
    input[i] = input[i].split(' ').map(Number)
    for (let j = 0; j < M; j++) {
        if (input[i][j] === 2) rootQueue.push([i, j])
    }
}

function checkSafeArea(graph) {
    let count = 0
    for(let i = 0; i < graph.length; i++) {
        for(let j = 0; j < graph[i].length; j++) {
            if(graph[i][j] === 0) count++ 
        }
    }
    if (max < count) {
        max = count
        result.push(max)
    } else return
    
}

function dfs(graph, count) {
    if (count === 3) {
        let bfsGraph = JSON.parse(JSON.stringify(graph));
        function bfs() {
            let visiteds = Array.from({ length: N }, () => Array(M).fill(false))
            let queue = JSON.parse(JSON.stringify(rootQueue));
            while (queue.length > 0) {
                let [cy, cx] = queue.shift()
                for (let i = 0; i < 4; i++) {
                    let nx = cx + dx[i]
                    let ny = cy + dy[i]

                    if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue
                    if (bfsGraph[ny][nx] === 1) continue
                    if (!visiteds[ny][nx]) {
                        bfsGraph[ny][nx] = 2
                        visiteds[ny][nx] = true
                        queue.push([ny, nx])
                    }
                }

            }
        }
        bfs()
        checkSafeArea(bfsGraph)
        return
    }
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] === 0) {
                let copyGraph = JSON.parse(JSON.stringify(graph));
                copyGraph[i][j] = 1;
                dfs(copyGraph, count + 1)
            }
        }
    }
    return false
}

dfs(input, 0)

if(result.length === 0) console.log(0)
else console.log(Math.max(...result))
