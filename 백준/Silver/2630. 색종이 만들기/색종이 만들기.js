let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const N = Number(input[0])
const arr = []
for(let i = 1; i <= N; i++) {
    arr.push(input[i].split(' ').map(Number))
}
let whiteCount = 0
let blueCount = 0

const checkColor = (row, col, size) => {
    let count = 0
    for(let i = row; i < row + size; i++) {
        for(let j = col; j < col + size; j++) {
            if(arr[i][j] === 1) count++;
        }
    }

    if(!count) {
        whiteCount++;
    } else if (count === size*size) {
        blueCount++
    } else {
        size = size / 2;
        checkColor(row, col, size)
        checkColor(row + size, col, size)
        checkColor(row, col + size, size)
        checkColor(row + size, col + size, size)
    }
}

checkColor(0, 0, N)

console.log(whiteCount)
console.log(blueCount)