let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input.shift());
for(let i = 0; i < N; i++) {
    input[i] = input[i].split(' ').map(Number)
}
let blueCount = 0;
let whiteCount = 0;

const divide = (row, col, size) => {
    let count = 0
    for(let i = row; i < row + size; i++) {
        for(let j = col; j < col + size; j++) {
            if(input[i][j] === 1) count++
        }
    }
    if(!count) {
        whiteCount++
    } else if(count === size * size) {
        blueCount++
    } else {
    size = parseInt(size / 2);
    divide(row, col, size);
    divide(row, col + size, size);
    divide(row + size, col, size);
    divide(row + size, col + size, size);
    }
};

divide(0, 0, N);
console.log(whiteCount);
console.log(blueCount);
