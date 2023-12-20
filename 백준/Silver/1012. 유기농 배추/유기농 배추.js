let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input_count = input[0]
input.shift()
for(let i = 0; i < input_count; i++){
    condition = input[0].split(' ')
    M = +condition[0]
    N = +condition[1]
    K = +condition[2]
    let field = Array.from(Array(M), () => Array(N).fill(0))
    let visited = Array.from(Array(M), () => Array(N).fill(false))
    let count = 0

    for(let j = 1; j <= K; j++) {
        XY = input[j].split(' ')
        X = +XY[0]
        Y = +XY[1]
        field[X][Y] = 1
    }

    function dfs(x, y) {
        if(x <= -1 || x >= M || y <= -1 || y >= N) return false
        if(field[x][y] == 1) {
            field[x][y] = 0
            visited[x][y] = true
            dfs(x-1, y)
            dfs(x+1, y)
            dfs(x, y-1)
            dfs(x, y+1)
            return true
        }
        return false
    }

    for(let a = 0; a < M; a++) {
        for(let b = 0; b < N; b++) {
            if(field[a][b] === 1 && visited[a][b] === false) {
                dfs(a,b)
                count++;
            }
        }
    }
    console.log(count)
    count = 0
    slice = input.slice(K+1, input.length)
    input = slice
}

