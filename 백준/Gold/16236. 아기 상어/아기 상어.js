/*
아기 상어 크기 2, 1초마다 상하좌우 인접칸 이동
조건
- 자신보다 큰 물고기 있는 칸은 지나갈 수 없음
- 자신보다 크기가 작은 물고기는 먹을 수 있음
- 크기 같다면 못먹지만 이동가능

방법
- 물고기가 공간에 없다 => 엄마 상어 도움 요청
- 물고기가 1마리라면, 그 물고기 먹으러 간다
- 물고기가 1마리보다 많다면 가장 가까운 물고기를 먹으러 간다
- 거리는 아기 상어가 물고기 있는 칸으로 이동 시 지나야하는 칸의 최솟값
- 거리가 가까운 몰고기가 많다면 가장 위에, 여러마리라면 가장 왼쪽에 있는 물고기를 먹음

- 로직 생각
- 1. 상어가 먹을 수 있는 물고기 까지의 거리를 전부 다 계산
- 2. 계산한걸 배열에 넣어 둠, 해당 배열에서 가장 위에서 왼쪽에 있는 값으로 이동 
=> 배열에 x,y가 젤 작은거
- 3. 

3 + 6 + 1 + 4

*/
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n")
const N = Number(input.shift());
const arr = input.map((line => line.split(' ').map(Number)))
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
let shark = 2
let shark_count = 0;
let totalTime = 0;
let startX, startY = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (arr[i][j] === 9) {
            startX = i
            startY = j
        }
    }
}
const bfs = (x, y, distance, visited) => {
    const queue = []
    queue.push([x, y])
    visited[x][y] = true
    while (queue.length > 0) {
        let [cx, cy] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let nx = cx + dx[i]
            let ny = cy + dy[i]
            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (visited[nx][ny]) continue;
            if (arr[nx][ny] > shark) continue;
            visited[nx][ny] = true
            distance[nx][ny] = distance[cx][cy] + 1;
            queue.push([nx, ny])
        }
    }


}

while (true) {
    const distance = Array.from({ length: N }, () => new Array(N).fill(0))
    const visited = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(false))
    bfs(startX, startY, distance, visited)
    let mx, my = 0;
    const result = []
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (distance[i][j] !== 0 && arr[i][j] < shark && arr[i][j] !== 0) {
                result.push([i, j, distance[i][j]])
            }
        }
    }

    const sortedResult = result.sort((a, b) => a[2] - b[2])
    if (sortedResult[0]) {
        let [fx, fy, fd] = sortedResult[0]
        mx = fx;
        my = fy;
        shark_count++;
        arr[mx][my] = 9
        arr[startX][startY] = 0
        totalTime += fd
    } else {
        break;

    }


    if (shark_count === shark) {
        shark++
        shark_count = 0;
    }
    startX = mx
    startY = my
}


console.log(totalTime)