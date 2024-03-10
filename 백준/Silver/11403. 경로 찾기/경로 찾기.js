const graph = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const N = Number(graph.shift())
const node = Array(N + 1).fill().map(() => []);
const result = Array.from({length : N}, () => Array(N).fill(0))
let answer = []
for (let i = 0; i < N; i++) {
    graph[i] = graph[i].split(' ').map(Number)
    for (let j = 0; j < N; j++) {
        if (graph[i][j] === 1) node[i + 1].push(j + 1)
    }
}

for (let i = 1; i < N + 1; i++) {
    let visited = Array(N + 1).fill(false)
    let arr = []
    dfs(i, node, visited, arr)
    for (let j = 0; j < arr.length; j++) {
        let num = arr[j]
        result[i-1][num-1] = 1
    }
}

for(let i = 0; i < result.length; i++) {
    answer.push(result[i].join(' '))
}

console.log(answer.join('\n'))

function dfs(v, nodes, visited, arr) {
    if (nodes.length === 0) return
    for (const cur of nodes[v]) {
        if (!visited[cur]) {
            visited[cur] = true
            arr.push(cur)
            dfs(cur, nodes, visited, arr)
        }
    }
}
