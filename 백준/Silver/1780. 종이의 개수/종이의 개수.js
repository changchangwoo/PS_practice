let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const N = Number(input[0])
const arr = []
for(let i = 1; i <= N; i++) {
    arr.push(input[i].split(' ').map(Number))
}

let totalMinCount = 0
let totalZeroCount = 0
let totalPlusCount = 0

const checkCount = (row, col, size) => {
    let minCount = 0;
    let zeroCount = 0;
    let plusCount = 0;
    for(let i = row; i < row+size; i++) {
        for (let j = col; j < col+size; j++) {
            if(arr[i][j] === 0)  {
                zeroCount++
            } else if (arr[i][j] === 1) {
                plusCount++
            } else if (arr[i][j] === -1) {
                minCount++;
            }
        }
    }

    if(minCount === size*size) {
        totalMinCount++;
    } else if (zeroCount === size*size) {
        totalZeroCount++;
    } else if (plusCount === size*size) {
        totalPlusCount++;
    } else {
        size = size / 3;
        checkCount(row, col, size)
        checkCount(row + size, col, size)
        checkCount(row + size*2, col, size)
        checkCount(row, col + size, size)
        checkCount(row + size, col + size *2, size)
        checkCount(row, col + size*2, size)
        checkCount(row + size, col + size, size)
        checkCount(row + size * 2, col + size, size)
        checkCount(row + size * 2, col + size * 2, size)
    }
}

checkCount(0, 0, N)

console.log(totalMinCount)
console.log(totalZeroCount)
console.log(totalPlusCount)