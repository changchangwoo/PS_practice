/*
마을이 있는데 그 마을을 두개로 분할
연결된 선을 하나씩 잘라보았을 떄
7C2를 해서 조합을 구해
각각에 두 수가 부모가 되는 조건에 각각의 unionFInd??
=> 완전 잘못된 접근, 모든 마을을 연결할 수 있는 상태에서 크루스칼 사용
크루스칼이 일어났다는건 최소 비용으로 연결되어있고 사이클이 없음
간선 하나만 자르면 둘로 나눠지므로 가장 큰 비용의 간선을 자르면 됨

*/
const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.map((item) => item.split(' ').map(Number))
arr.sort((a, b) => a[2] - b[2])
const parent = Array.from({ length: N + 1 }, (_, idx) => idx)
let count = 0;
let answer = 0;
let max = 0;
for (let i = 0; i < arr.length; i++) {
    const [s, e, v] = arr[i]
    if (count === N - 1) break;
    if (!findParent(s, e, parent)) {
        count++;
        answer += v
        max = Math.max(max, v)
        unionParent(s, e, parent)
    }
}
console.log(answer - max)

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