let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let N = +input[0];
let graph = [];
let visited = Array.from({ length: N }, () => Array(N).fill(false));
let count = 0
let max = 0
let answerList = []

input.shift();

for (let i = 0; i < N; i++) {
    let temp = input[i].split(' ').map(Number);
    if(Math.max(...temp) > max) max = Math.max(...temp)
    graph.push(temp);
}

function dfs(x, y, min) {
    if (x < 0 || x >= N || y < 0 || y >= N || graph[x][y] <= min || visited[x][y]) return;
    visited[x][y] = true;
    dfs(x - 1, y, min);
    dfs(x + 1, y, min);
    dfs(x, y - 1, min);
    dfs(x, y + 1, min);
}

for(let k = 0; k <= max; k++) {
    visited = Array.from({ length: N }, () => Array(N).fill(false));
    count = 0
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            if(visited[i][j] === false && graph[i][j] > k) {
                dfs(i,j,k)
                count++
            } else continue
        }
    }
    answerList.push(count)
}

console.log(Math.max(...answerList))