const [N, r, c] = require('fs').readFileSync("/dev/stdin").toString().split(' ').map(Number)
let size = Math.pow(2, N)
let answer = 0
function divide(row, col, size) {
    if(row === r && c === col) {
        console.log(answer)
        return;
    }

    if(r >= row && r < row+size && c >= col && c < col+size) {
        let halfsize = size/2
        divide(row, col, halfsize)
        divide(row, col + halfsize, halfsize)
        divide(row + halfsize, col, halfsize)
        divide(row + halfsize, col + halfsize, halfsize)
    } else {
        answer += size * size
    }
}

divide(0,0,size)