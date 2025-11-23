/*
1. 연속해서 두 칸 이상의 빈 칸 존재시 누울 수 있음
2. 가로 가능 세로 가능
3. 눕게 된다면 쭉 뻗어서 반드시 벽에 닿게 됨
4. 단순 구현 => 가로 -1, +1 하나씩 찾아서 눕도록
*/

let input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const N = Number(input.shift());
for (let i = 0; i < N; i++) {
    input[i] = input[i].trim().split('')
}

let rowCount = 0;
let colCount = 0;
for (let i = 0; i < N; i++) {
    let rowFlag = false
    let count = 0;
    for (let j = 0; j < N; j++) {
        if (input[i][j] === '.') {
            if (rowFlag) {
                continue;
            }
            count++;
            if (count >= 2) {
                rowFlag = true
                rowCount++;
            }
        }
        else {
            count = 0;
            rowFlag = false
        }
    }
}

for (let i = 0; i < N; i++) {
    let colFlag = false
    let count = 0;
    for (let j = 0; j < N; j++) {
        if (input[j][i] === '.') {
            if (colFlag) {
                continue;
            }
            count++;
            if (count >= 2) {
                colFlag = true
                colCount++;
            }
        }
        else {
            count = 0;
            colFlag = false
        }
    }
}

console.log(rowCount, colCount)

