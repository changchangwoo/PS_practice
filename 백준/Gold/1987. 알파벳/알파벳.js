let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let NM = input.shift().split(' ');
let N = +NM[0];
let M = +NM[1];
let graph = [];
let visited = Array.from({length: N}, () => Array(M).fill(false));
let maxCount = 0;

for (let i = 0; i < N; i++) {
    let temp = input[i].trim().split('');
    graph.push(temp);
}

function dfs(x, y, count, visitHistory) {
    if (x < 0 || x >= N || y < 0 || y >= M) return;
    if (!visited[x][y]) {
        if (visitHistory[graph[x][y].charCodeAt() - 65]) return;

        visited[x][y] = true;
        count++;
        visitHistory[graph[x][y].charCodeAt() - 65] = true;
        dfs(x, y + 1, count, visitHistory);
        dfs(x + 1, y, count, visitHistory);
        dfs(x - 1, y, count, visitHistory);
        dfs(x, y - 1, count, visitHistory);
        maxCount = Math.max(maxCount, count);

        visited[x][y] = false;
        visitHistory[graph[x][y].charCodeAt() - 65] = false;
    }
}

let initialVisitHistory = Array(26).fill(false);
dfs(0, 0, 0, initialVisitHistory);

console.log(maxCount);
