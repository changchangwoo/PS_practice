let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const N = Number(input[0])
const arr = []
let answer = ''

for(let i = 1; i <= N; i++) {
    arr.push(input[i].split('').map(Number))
}

const devideConquer = (row, col, size) => {
    let count = 0
    for(let i = row; i < row+size; i++) {
        for(let j = col; j < col+size; j++) {
            if(arr[i][j] === 1) count++;
        }
    }

    if(count === 0) {
        answer += '0'
    } else if (count === size * size) {
        answer += '1'
    } else {
        answer += "("
        size = size/2
        devideConquer(row, col, size)
        devideConquer(row, col + size, size)
        devideConquer(row + size, col, size)
        devideConquer(row + size, col + size, size)
        answer += ')'
    }
}

devideConquer(0, 0, N)

console.log(answer)