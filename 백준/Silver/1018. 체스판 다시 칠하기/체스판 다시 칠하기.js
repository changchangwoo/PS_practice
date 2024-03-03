const board = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = board.shift().split(' ').map(Number);
let answer = []
let rowIndex = 0;
let colIndex = 0;

while (true) {
    const temp = [];
    for (let i = colIndex; i < colIndex + 8; i++) {
        temp.push(board[i].slice(rowIndex, rowIndex + 8));
    }
    answer.push(checkBlackBoard(temp))
    answer.push(checkWhiteBoard(temp))
    if (rowIndex+8 <= M) rowIndex++;
    if (rowIndex+8 > M && colIndex+8 < N) {
        colIndex++;
        rowIndex = 0
    }
    if (rowIndex+8 > M && colIndex+8 >= N) break;
}

function checkBlackBoard(bd) { // 검정이 [0][0]
    let count = 0
    for(let i = 0; i < 8; i++ ) {
        for(let j = 0 ; j < 8; j++) {
            if(i%2 === 0) {
                if(j%2 === 0 && bd[i][j] !== 'B') count++
                if(j%2 === 1 && bd[i][j] !== 'W') count++
            } else {
                if(j%2 === 1 && bd[i][j] !== 'B') count++
                if(j%2 === 0 && bd[i][j] !== 'W') count++
            }
        }
    }
    return count
}

function checkWhiteBoard(bd) {
    let count = 0
    let min = 0
    for(let i = 0; i < 8; i++ ) {
        for(let j = 0 ; j < 8; j++) {
            if(i%2 === 1) {
                if(j%2 === 0 && bd[i][j] !== 'B') count++
                if(j%2 === 1 && bd[i][j] !== 'W') count++
            } else {
                if(j%2 === 1 && bd[i][j] !== 'B') count++
                if(j%2 === 0 && bd[i][j] !== 'W') count++
            }
        }
    }
    return count
}

console.log(Math.min(...answer))
