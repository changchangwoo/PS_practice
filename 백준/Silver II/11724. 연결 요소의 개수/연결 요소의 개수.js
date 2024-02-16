let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

let NM = input[0].split(" ")
let N = +NM[0]
let M = +NM[1]
let count = 0;

input.shift()

function bfs(graph, start, visited) {
    const q = [start];
    while (q.length !== 0) {
        const v = q.shift();
        for (const cur of graph[v]) {
            if (!visited[cur]) {
                q.push(cur);
                visited[cur] = true
            }
        }
    }
}

let arr = Array.from({ length: N + 1 }, () => []);
let visited = Array.from(Array(N + 1)).fill(false)

for (let i = 0; i < M; i++) {
    let node = input[i].split(' ')
    let node1 = +node[0]
    let node2 = +node[1]
    arr[node1].push(node2)
    arr[node2].push(node1)
}

for(let i = 1; i <= N; i++) {
    if(!visited[i]) {
        bfs(arr, i, visited)
        count++;
    }
}

console.log(count)