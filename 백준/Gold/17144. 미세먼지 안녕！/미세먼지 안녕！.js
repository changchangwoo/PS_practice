/* 확산은 동시에 일어나는 것임 => 절대 먼저 값을 더하거나 하면 안됨
아니면 확산용 그래프를 가지고 있다가, 거기에 값을 추가하는식으로 진행
확산 => 공기 청정기 동작
*/

let input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const [R, C, T] = input.shift().split(' ').map(Number)


const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

const posAircleaner = []

for (let i = 0; i < R; i++) {
    input[i] = input[i].split(' ').map((num) => {
        if (num === "-1") {
            posAircleaner.push(i)
        }
        return Number(num)
    })
}


const [posTop, posBottom] = posAircleaner



// 미세먼지 확산 로직 => 이게 1초동안 진행
// 최대 for문 250000번
function spreadDust(input, arr) {
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (input[i][j] === 0 || input[i][j] === -1) continue;
            const splitData = Math.floor(input[i][j] / 5)
            // if (input[i][j] === 9) console.log(`디버깅 split ${splitData}`)
            let count = 0;
            for (let k = 0; k < 4; k++) {
                const nx = i + dx[k]
                const ny = j + dy[k]
                if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
                if (input[nx][ny] === -1) continue;
                arr[nx][ny] += splitData
                count++;
            }
            arr[i][j] += input[i][j] - (count * splitData)
            // if (input[i][j] === 9) console.log(`디버깅 arr ${arr[i][j]}`)
        }
    }
}

function runAirCleaner(input, arr) {

    // 상단
    for (let i = posTop - 1; i > 0; i--) {
        arr[i][0] = arr[i - 1][0]
    }
    for (let i = 0; i < C - 1; i++) {
        arr[0][i] = arr[0][i + 1];
    }
    for (let i = 0; i < posTop; i++) {
        arr[i][C - 1] = arr[i + 1][C - 1]
    }
    for (let i = C - 1; i > 0; i--) {
        arr[posTop][i] = arr[posTop][i - 1]
    }

    // 하단
    for (let i = posBottom + 1; i < R - 1; i++) {
        arr[i][0] = arr[i + 1][0]
    }
    for (let i = 0; i < C - 1; i++) {
        arr[R - 1][i] = arr[R - 1][i + 1]
    }
    for (let i = R - 1; i > posBottom; i--) {
        arr[i][C - 1] = arr[i - 1][C - 1];
    }
    for (let i = C - 1; i > 0; i--) {
        arr[posBottom][i] = arr[posBottom][i - 1];
    }

}

for (let i = 0; i < T; i++) {
    const calc_arr = Array.from({ length: R }, () => new Array(C).fill(0))
    spreadDust(input, calc_arr);
    runAirCleaner(input, calc_arr);
    input = JSON.parse(JSON.stringify(calc_arr));
    input[posTop][0] = -1
    input[posBottom][0] = -1

}

let answer = 0;
input.forEach(element => {
    element.forEach((item) => {
        if (item !== -1) answer += item
    })
});

console.log(answer)


// console.log(arr)