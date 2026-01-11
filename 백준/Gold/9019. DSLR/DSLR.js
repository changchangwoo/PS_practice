/*

D, S L, R을 이용하는 계산기
레지스터의 10만 미만 십진수 저장
각각의 자리수는 d1, d2, d3, d4

1. D : n을 두배로 바꾼다. 결과값이 9999보다 큰 경우, 10000 나눈 나머지
그 결과 값을 2n mod 10000 에 저장
2. S : n에서 1을 뺀 결과 n-1을 레지스터에 저장, n이 0이라면 9999 저장
3. L : 각 자릿수를 왼편으로 회전 시켜 결과 레지스터 저장, d2, d3, d4, d1이 됨
4. 각 자릿수를 오른편으로 회전시켜 레지스터에 저장, d4, d1, d2, d3이 됨

서로 다른 두 정수 A와 B에 대하여, A를 B로 바꾸는 최소한의 명령 생성 프로그램
n의 자릿수에 0이 포함된 경우 염두
1000에 L적용 => 0001, R적용 => 0100 각각 1, 100

1. 자리수가
*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = +input.shift()
let result = []

for (let i = 0; i < N; i++) {
    const LIMIT = 10000
    let [start, target] = input.shift().split(' ').map(Number)
    const visited = new Array(LIMIT).fill(false)
    const prev = new Array(LIMIT).fill(0);
    const cmd = new Array(LIMIT).fill(0)
    const bfs = () => {
        const queue = []
        queue.push(start)
        visited[start] = true
        let head = 0;
        while (head < queue.length) {
            const cur = queue[head++];

            for (const [next, c] of [
                [opD(cur), 'D'],
                [opS(cur), 'S'],
                [opL(cur), 'L'],
                [opR(cur), 'R'],
            ]) {
                if (!visited[next]) {
                    visited[next] = true;
                    prev[next] = cur;
                    cmd[next] = c;
                    queue.push(next);
                    if (next === target) return;
                }
            }
        }
    }
    bfs()
    let cur = target
    let res = ''
    while (cur !== start) {
        res = cmd[cur] + res;
        cur = prev[cur]
    }
    result.push(res)
}

console.log(result.join('\n'))

function opD(num) {
    let opNum = +num * 2;
    if (opNum >= 10000) {
        return opNum % 10000;
    } return opNum
}

function opS(num) {
    if (num === 0) return 9999;
    return num - 1;
}


function opL(n) {
    return (n % 1000) * 10 + Math.floor(n / 1000);
}

function opR(n) {
    return (n % 10) * 1000 + Math.floor(n / 10);
}