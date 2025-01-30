/*
3차원 배열에 대한 접근
dx와 dy dz를 정의한다

*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const dx = [-1, 1, 0, 0, 0, 0]
const dy = [0, 0, -1, 1, 0, 0]
const dz = [0, 0, 0, 0, -1, 1]

while (input.length > 0) {
    const [L, R, C] = input.shift().split(' ').map(Number);
    const visited = Array.from({ length: L }, () => Array.from({ length: R }, () =>
        new Array(C).fill(false)
    ))
    const maps = Array.from({ length: L }, () => Array.from({ length: R }, () =>
        new Array(C).fill(0)
    ))
    const graph = []
    for (let i = 0; i < L; i++) {
        let tempArr = []
        for (let j = 0; j < R; j++) {
            tempArr.push(input.shift().trim().split('').map((item) => item))
        }
        input.shift();
        graph.push(tempArr)
    }

    const [start, end] = checkSE(graph, L, R, C)
    if (!start || !end) {
        return
    }

    function BFS(start) {
        const queue = []
        queue.push(start)
        let [sx, sy, sz] = start
        visited[sx][sy][sz] = true
        while (queue.length > 0) {
            let [cx, cy, cz] = queue.shift();
            for (let i = 0; i < 6; i++) {
                let nx = cx + dx[i]
                let ny = cy + dy[i]
                let nz = cz + dz[i]
                if (nx < 0 || nx >= L || ny < 0 || ny >= R || nz < 0 || nz >= C ||
                    visited[nx][ny][nz] === true ||
                    graph[nx][ny][nz] === "#"
                ) continue
                maps[nx][ny][nz] = maps[cx][cy][cz] + 1
                visited[nx][ny][nz] = true
                queue.push([nx,ny,nz])
            }
        }
    }
    BFS(start);
    const [ex, ey, ez] = end
    maps[ex][ey][ez] ? succesMessage(maps[ex][ey][ez]) : failMessage(); 
}



function checkSE(arr, L, R, C) {
    let start, end;
    for (let i = 0; i < L; i++) {
        for (let j = 0; j < R; j++) {
            for (let k = 0; k < C; k++) {
                if (arr[i][j][k] === "S") start = [i, j, k]
                if (arr[i][j][k] === "E") end = [i, j, k]
            }
        }
    }
    return [start, end]
}

function failMessage() {
    console.log("Trapped!")
}

function succesMessage(s) {
    console.log(`Escaped in ${s} minute(s).`)
}