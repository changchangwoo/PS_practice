/*
크루스칼은 최소 신장 트리
=> 사이클이 없어야한단
*/
const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = +input.shift()
const M = +input.shift();
const arr = input.map((item) => item.split(' ').map(Number))
arr.sort((a, b) => a[2] - b[2])
const parent = Array.from({ length: N + 1 }, (_, idx) => idx)
let count = 0;
let answer = 0;

for (const [s, e, v] of arr) {
    if (count === N - 1) break;
    if (!findParent(s, e, parent)) {
        count++;
        answer += v
        unionParent(s, e, parent)
    }
}

console.log(answer)

function getParent(a, arr) {
    if (arr[a] === a) return a
    arr[a] = getParent(arr[a], arr)
    return arr[a]
}

function unionParent(a, b, arr) {
    const A = getParent(a, arr)
    const B = getParent(b, arr)
    if (A < B) arr[B] = arr[A]
    else arr[A] = arr[B]
    return
}

function findParent(a, b, arr) {
    const A = getParent(a, arr)
    const B = getParent(b, arr)
    if (A === B) return true
    return false
}