let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0]
let arr = []
for (let i = 1; i <= N; i++) {
    arr.push(input[i])
}

let verticalCount = 0
let horizonCount = 0

// 가로 횟수
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let flag = true;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i][j] === '.') {
            if (!flag) continue
            count++;
        } else if (arr[i][j] === 'X') {
            flag = true
            count = 0
        }
        if (count === 2) {
            verticalCount++;
            count = 0;
            flag = false

        }
    }
}

// 세로 횟수
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let flag = true;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j][i] === '.') {
            if (!flag) continue
            count++;
        } else if (arr[j][i] === 'X') {
            flag = true
            count = 0
        }
        if (count === 2) {
            horizonCount++;
            count = 0;
            flag = false
        }
    }
}

console.log(verticalCount, horizonCount)