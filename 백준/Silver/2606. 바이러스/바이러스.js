const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const N = Number(input.shift())
const M = Number(input.shift())
const arr = Array.from({length: N+1}, () => new Array())
const visited = new Array(N+1).fill(false)
input.forEach(el => {
    const [u, v] = el.split(' ').map(Number)
    arr[u].push(v)
    arr[v].push(u)
});

const dfs = (v, graph, visited) => {
    visited[v] = true
    for(let i = 0; i < graph[v].length; i++) {
        if(!visited[graph[v][i]]) dfs(graph[v][i], graph, visited)
    }
}
dfs(1, arr, visited);
const num = visited.filter(item => item === true).length
console.log(num-1)