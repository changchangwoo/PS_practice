/*
적록색약인 사람은 빨강 초록 구분 없음
빨강 = 초록 만들면 적록 색약 그래프
*/
const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = Number(input.shift());
const visited = Array.from({ length: N }, () => new Array(N).fill(false))
const visitedEx = Array.from({ length: N }, () => new Array(N).fill(false))
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
const arr = []
const arrEx = []
for (let i = 0; i < N; i++) {
    arr.push(input[i].trim().split(''))
    arrEx.push(input[i].trim().split('').map(item => {
        if (item === "R") {
            return "G"
        } else return item
    }));
}

const bfs = (x, y, graph, visited, target) => {
    const queue = [];
    queue.push([x, y])
    while (queue.length > 0) {
        let [cx, cy] = queue.pop();
        for (let i = 0; i < 4; i++) {
            let nx = cx + dx[i]
            let ny = cy + dy[i]
            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue
            if (visited[nx][ny]) continue
            if (graph[nx][ny] !== target) continue
            visited[nx][ny] = true
            queue.push([nx, ny])
        }
    }
}

const checkBfs = (arr, type, visited) => {
    let count = 0;
    let targets;
    if (type === "ex") targets = ["G", "B"]
    else targets = ["R", "G", "B"]
    for (let target of targets) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (arr[i][j] === target && !visited[i][j]) {
                    bfs(i, j, arr, visited, target)
                    count++;
                }
            }
        }
    }
    return count
}

console.log(checkBfs(arr, null, visited), checkBfs(arrEx, "ex", visitedEx))
