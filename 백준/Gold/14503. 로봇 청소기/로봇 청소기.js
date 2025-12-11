/*
1. 청소 안된 경우 현재 칸 청소
2. 주변 4칸 중 청소되지 않은 빈 칸이 업는 경우
=> 1. 방향 유지 한 채 후진 할 수 있다면 후진
=> 2. 벽이라 후진 할 수 없다면 작동 중지
3. 주변 4칸 중 빈 칸이 있는 경우
4. 반 시계 방향 회전
5. 청소되지 않는 경우 한 칸 전진

d = 0 북쪽
d = 1 동쪽
d = 2 남쪽
d = 3 서쪽

반시계 방향 회전
0 -> 3 -> 2 -> 1 => 헷갈리게 왜 반대로해놨냐 진짜
*/
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n")
const dx = [-1, 0, 1, 0]
const dy = [0, 1, 0, -1]
const [N, M] = input.shift().split(' ').map(Number)
let [x, y, d] = input.shift().split(' ').map(Number)
const arr = input.map((line => line.split(' ').map(Number)))
let count = 0;

const turnRobot = (td) => {
    d = td === 0 ? 3 : td - 1
    let nx = x + dx[d]
    let ny = y + dy[d]
    if (arr[nx][ny] === 0) {
        x = nx
        y = ny
        return true
    }
}

// 

const checkClean = () => {
    let flag = false
    for (let i = 0; i < 4; i++) { // 주변 청소할 수 있는지 체크
        let nx = x + dx[i]
        let ny = y + dy[i]
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue; // 끝 체크
        if (arr[nx][ny] === 1) continue; // 벽 체크
        if (arr[nx][ny] === -1) continue; // 쓰레기 체크
        flag = true
    }
    if (flag) {
        for (let i = 0; i < 4; i++) {
            if (turnRobot(d)) break;
        }
        return true
    } else {
        return false
    }

}
while (true) {
    if (arr[x][y] === 0) {
        count++;
        arr[x][y] = -1
    }
    isNext = checkClean()
    if (!isNext) {
        let bx = x + dx[(d + 2) % 4]
        let by = y + dy[(d + 2) % 4]
        if (bx < 0 || bx >= N || by < 0 || by >= M) break;
        if (arr[bx][by] === 1) break;
        x = bx
        y = by
    };
}

console.log(count)