let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
let AllNumber = +input[0]+1
let [Q1, Q2] = input[1].split(' ').map(Number)
let N = +input[2]
let graph = Array.from({length : AllNumber}, () => Array())
let visited = Array.from({length : AllNumber}, () => false)
let count = 0
let flag = 0

input = input.slice(3, input.length)

for(let i = 0; i < N; i++) {
    [X, Y] = input[i].split(' ').map(Number)
    graph[X].push(Y)
    graph[Y].push(X)
}

function dfs(graph, start, visited, target2) {
    visited[start] = true
    if(start === target2) {
        flag = 1
        console.log(count)
    }
    for(const cur of graph[start]) {
        count++
        if(!visited[cur]) {
            dfs(graph, cur, visited, target2)
        }
        count--
    }
}

dfs(graph, Q1, visited, Q2)
if(flag === 0) console.log(-1)
