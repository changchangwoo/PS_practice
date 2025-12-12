/*
4개 연결된 건 전부 가능 + T 미노 경우의 수 추가

*/

const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.map((line) => line.split(' ').map(Number))
const visited = Array.from({ length: N }, () => new Array(M).fill(false))
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

const answer = []


const calTmino = (x, y) => {
    // 좌표가 T미노의 중앙이 되는 경우에 할 수 있는 계산들을 모두 계산
    let ux = x - 1
    let dx = x + 1
    let dy = y - 1
    let uy = y + 1;
    if (ux >= 0) { // 위가 있는 경우
        if (dy >= 0 && uy < M) // 위가 있으면서 좌우로 구멍이 없는 경우
        {
            answer.push(arr[x][y] + arr[ux][y] + arr[x][dy] + arr[x][uy])
        }
    }
    if (dx < N) { // 아래가 있는 경우
        if (dy >= 0 && uy < M) // 아래가 있으면서 좌우로 구멍이 없는 경우
        {
            answer.push(arr[x][y] + arr[dx][y] + arr[x][dy] + arr[x][uy])
        }
    }
    if (dy >= 0) // 좌가 있는 경우
    {
        if (ux >= 0 && dx < N) { // 좌가 있으면서 상하로 구멍이 없는경우
            answer.push(arr[x][y] + arr[x][dy] + arr[dx][y] + arr[ux][y])
        }
    }
    if (uy < M) // 우가 있는 경우
    {
        if (ux >= 0 && dx < N) { // 우가 있으면서 상하로 구멍이 없는경우
            answer.push(arr[x][y] + arr[x][uy] + arr[dx][y] + arr[ux][y])
        }
    }

}

const dfs = (cells) => {
    if (cells.length >= 4) {
        // console.log(cells)
        let calArr = cells.map((item) => arr[item[0]][item[1]])
        answer.push(calArr.reduce((prev, sum) => prev + sum, 0))
        return
    }
    for (const [x, y] of cells) {
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (visited[nx][ny]) continue;
            visited[nx][ny] = true
            cells.push([nx, ny])
            dfs(cells);
            cells.pop()
            visited[nx][ny] = false
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        visited[i][j] = true
        dfs([[i, j]])
        // calTmino(i, j)
    }
}
console.log(Math.max(...answer))