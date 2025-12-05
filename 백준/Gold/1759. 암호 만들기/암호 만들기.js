/*
조건 1. 정렬
조건 2. 최소 한 개의 모음과 두 개의 자음
백트래킹으로 탐색
*/
let input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const jaum = ["b", "c", "d", "f", "g", "h", "j", "k", 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'x', 'z', 'w', 'y']
const moum = ["a", "e", "i", 'o', 'u']
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').sort();
const result = []
const answers = []



const isCheckJaum = (result_arr) => {
    let count = 0;
    for (let i = 0; i < result_arr.length; i++) {
        if (jaum.includes(result_arr[i])) count++;
        if (count >= 2) return true
    }
    return false
}

const isCheckMoum = (result_arr) => {
    let count = 0;
    for (let i = 0; i < result_arr.length; i++) {
        if (moum.includes(result_arr[i])) count++;
        if (count >= 1) return true
    }
    return false
}


const dfs = (v) => {
    if (result.length === N) {
        if (isCheckJaum(result) && isCheckMoum(result)) {
            answers.push(result.join(''))
        }
        return
    }
    for (let i = v; i < M; i++) {
        result.push(arr[i]);
        dfs(i + 1)
        result.pop(arr[i]);
    }
}
dfs(0)
console.log(answers.join('\n'))

