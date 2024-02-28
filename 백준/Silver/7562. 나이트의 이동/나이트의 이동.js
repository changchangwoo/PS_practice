let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
let N = Number(input.shift())

for (let i = 0; i < N; i++) {
    let size = Number(input.shift())
    let [x, y] = input.shift().split(' ').map(Number)
    let [targetX, targetY] = input.shift().split(' ').map(Number)
    let checked = Array.from({ length: size }, () => new Array(size).fill(0))
    let visited = Array.from({ length: size }, () => new Array(size).fill(false))
    const queue = []

    let dy = [-2, -2, -1, -1, +1, +1, +2, +2]
    let dx = [+1, -1, +2, -2, +2, -2, +1, -1]

    function bfs(startX, startY) {
        queue.push([startX, startY])
        visited[startX][startY] = true
        while (queue.length > 0) {
            let [x, y] = queue.shift()
            visited[x][y] = true
            if (x === targetX && y === targetY) break
            for (let i = 0; i < 8; i++) {
                let nx = dx[i] + x
                let ny = dy[i] + y
                if (nx >= 0 && nx < size && ny >= 0 && ny < size && !visited[nx][ny]) {
                    visited[nx][ny] = true
                    checked[nx][ny] = checked[x][y] + 1
                    queue.push([nx,ny])
                }
            }
        }
    }

    bfs(x, y)

    console.log(checked[targetX][targetY])
}
