const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const N = Number(input.shift())
const M = Number(input.shift())
const graph = Array.from({ length: N }, () => new Array(N).fill(Infinity))
for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(' ').map(Number)
    let start = input[i][0]
    let end = input[i][1]
    let cost = input[i][2]
    if(graph[start-1][end-1] === Infinity) graph[start-1][end-1] = cost
    else {
        if(graph[start-1][end-1] > cost) graph[start-1][end-1] = cost
    }
}

for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if(i ===j) graph[i][i] = 0
            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j])
        }
    }
}

for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
        if(graph[i][j] === Infinity) graph[i][j] = 0
    }
}

const stringMatrix = graph.map(row => row.join(' ')).join('\n');
console.log(stringMatrix)
