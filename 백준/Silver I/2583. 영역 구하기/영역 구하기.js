let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let MNK = input[0].split(' ');
input.shift();

let M = +MNK[0];
let N = +MNK[1];
let K = +MNK[2];


let count = 0;
let answer = []


let field = Array.from(Array(M), () => Array(N).fill(0));
let visited = Array.from(Array(M), () => Array(N).fill(false));

for (let i = 0; i < input.length; i++) {
    let coordinate = input[i].split(' ');
    let startX = +coordinate[0];
    let startY = +coordinate[1];
    let endX = +coordinate[2];
    let endY = +coordinate[3];

    for (let j = startX; j < endX; j++) {
        for (let k = startY; k < endY; k++) {
            let X = +j;
            let Y = +k;
            field[Y][X] = 1
        }
    }
}

field.reverse()

function dfs(x,y) {
    if(x <= -1 || x >= M || y <= -1 || y >= N) return false
    if(field[x][y] === 0) {
        field[x][y] = 1
        count += 1
        visited[x][y] = true
        dfs(x-1, y)
        dfs(x+1, y)
        dfs(x, y-1)
        dfs(x, y+1)
        return true
    }
    return false
}

for(let i = 0; i < N; i++) {
    for (let j =0; j < M; j++) {
        if(field[j][i] === 0 && visited[j][i] === false)
        {
            dfs(j,i, 0)
        }
        if(count !== 0) answer.push(count)
        count = 0;
    }
}

console.log(answer.length)
console.log(answer.sort((a, b) => a - b).join(' '));
