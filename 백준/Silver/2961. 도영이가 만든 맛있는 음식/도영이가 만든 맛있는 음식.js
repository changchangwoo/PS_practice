/*
우선 그냥 완전 탐색으로 dfs를 활용해서 전부 출력해보자
조합 자체를 arr에 저장하고, arr에 있는 값들을 전부 계산하는 식으로 할까?
*/
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0])
const M = []
const answer = []
for(let i = 1; i <= N; i++) {
    M.push(input[i].split(' ').map(Number))
}

const arr = []
const result = []
const visited = new Array(N+1).fill(false)
let min = Infinity

const checkMin = (arr) => {
    if(arr.length === 0) return
    const mul = arr.reduce((acc, values) => acc * values[0], 1)
    const sum = arr.reduce((acc, values) => acc + values[1], 0)
    return Math.abs(mul - sum)
}

const dfs = () => {
    calMin = checkMin(arr)
    if(min > calMin) min = calMin

    for(let i = 0; i < N; i++) {

    if(visited[i] === false) {
        visited[i] = true
        arr.push(M[i])

        dfs();
        visited[i] = false
        arr.pop();
    }
}
return

}

dfs();

console.log(min)

