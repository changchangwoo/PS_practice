/*
각 노드의 부모를 구하는 프로그램
*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const N = +input.shift();
const arr = input.map(item => item.split(' ').map(Number))
const graph = Array.from({ length: N + 1 }, () => new Array())
for (const item of arr) {
    let [x, y] = item
    graph[x].push(y)
    graph[y].push(x)
}

const visited = new Array(N + 1).fill(false)
const countList = new Array(N + 1).fill(0)
const bfs = () => {
    const queue = [];
    queue.push([1, 0])
    visited[1] = true
    while (queue.length > 0) {
        let [cur, count] = queue.shift();
        for (let i = 0; i < graph[cur].length; i++) {
            let next = graph[cur][i]
            if (!visited[next]) {
                queue.push([next, count + 1])
                countList[next] = count + 1
                visited[next] = true
            }
        }
    }
}
bfs();
let answer = []
for (let i = 2; i < graph.length; i++) {
    let min = Infinity;
    let parent = 0;
    for (let j = 0; j < graph[i].length; j++) {
        if (min > countList[graph[i][j]]) {
            min = countList[graph[i][j]]
            parent = graph[i][j]
        }
    }
    answer.push(parent)
}

console.log(answer.join('\n'))