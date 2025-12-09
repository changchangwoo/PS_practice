const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.map(element => element.trim().split('')
);
const visited = new Array(26).fill(false)

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
let max = 0;

const dfs = (x, y, count) => {
    max = Math.max(max, count)
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i]
        const ny = y + dy[i]
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
        if (visited[arr[nx][ny].charCodeAt() - 65]) continue
        visited[arr[nx][ny].charCodeAt() - 65] = true
        dfs(nx, ny, count + 1)
        visited[arr[nx][ny].charCodeAt() - 65] = false
    }
}
visited[arr[0][0].charCodeAt() - 65] = true
dfs(0, 0, 1)
console.log(max)
