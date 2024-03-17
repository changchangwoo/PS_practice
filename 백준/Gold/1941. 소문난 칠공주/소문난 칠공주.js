/*
1. 7명의 여학생으로 구성
2. 7명의 자리는 가로가 세로로 인접
3. '이다솜파'로 구성되어 있을 필요는 없다
4. '이다솜파'가 우위를 점해야한다 => 적어도 4명은 '이다솜파'
*/

let graph = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(val => val.trim().split('')).flat()
const visited = Array(25).fill(false)
const result = []
const answer = []
const dx = [0, 0, -1, 1]
const dy = [-1, 1, 0, 0]
const queue = []
let finalCount = 0
function backTracking(num) {
    if (result.length === 7) {
        if (checkingDasom(result)) {
            answer.push(result.join(' '))
        }
        return
    }
    for (let i = 0; i < 25; i++) {
        if (!visited[i] && i >= num) {
            visited[i] = true
            result.push(i)
            backTracking(i)
            visited[i] = false
            result.pop(i)
        }
    }
}
backTracking(0)

function checkingDasom(arr) {
    let dasomCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (graph[arr[i]] === 'S') {
            dasomCount++;
        }
        if (dasomCount >= 4) return true; // '이다솜파'가 4명 이상인 경우 true 반환
    }
    return false; // '이다솜파'가 4명 미만인 경우 false 반환
}

let dasomArr = answer.map(data => data.split(' ').map(Number))

for (value of dasomArr) {
    let x = 0
    let y = 0
    let flag = 0
    let bfsGraph = Array(25).fill(0)
    for (let i = 0; i < value.length; i++) {
        bfsGraph[value[i]] = 1
    }
    let newGraph = []
    for (let i = 0; i < 5; i++) {
        newGraph.push(bfsGraph.slice(i * 5, (i + 1) * 5));
    }
    const bfsVisted = Array.from({ length: 5 }, () => new Array(5).fill(false))
    for (let i = 0; i < newGraph.length; i++) {
        for (let j = 0; j < newGraph[i].length; j++) {
            if (newGraph[i][j] === 1) {
                y = i
                x = j
                flag = 1
                break
            }
        }
        if (flag === 1) break
    }
    function bfs(y, x) {
        queue.push([y, x])
        bfsVisted[y][x] = true
        while (queue.length > 0) {
            let [curY, curX] = queue.shift()
            for (let i = 0; i < 4; i++) {
                let nX = curX + dx[i]
                let nY = curY + dy[i]
                if (nX < 0 || nX >= 5 || nY < 0 || nY >= 5) continue
                if (newGraph[nY][nX] !== 1 || bfsVisted[nY][nX]) continue
                bfsVisted[nY][nX] = true
                queue.push([nY, nX])
            }
        }
    }
    bfs(y, x)
    let flatVisted = bfsVisted.flat()
    let final = 0
    for(let i = 0; i < value.length; i++) {
        if(!flatVisted[value[i]]) final = 1
    }
    if(final === 0) finalCount++;
}

console.log(finalCount)