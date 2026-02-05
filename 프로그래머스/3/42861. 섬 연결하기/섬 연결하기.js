/*
n개의 섬 사이, 다리를 건설하는 비용
모든 선이 통행 가능해야한다 => 간선은 n-1개
costs[i][0], costs[i][1] => 연결되는 두 섬의 번호
같은 부모로 향하는 
*/
function getParent(a, arr) {
    if(arr[a] === a) return a
    arr[a] = getParent(arr[a], arr)
    return arr[a]
}
function unionParent(a, b, arr) {
    let A = getParent(a, arr)
    let B = getParent(b, arr)
    if(A < B) arr[A] = arr[B]
    else arr[B] = arr[A]
    return
}
function findParent(a , b, arr) {
    let A = getParent(a, arr)
    let B = getParent(b, arr)
    if(A === B) return true
    else return false
}

function solution(n, costs) {
    var answer = 0;
    const parent = Array.from({ length: n + 1 }, (_, i) => i)
    costs.sort((a, b) => a[2] - b[2])
    let count = 0;
    for(const [s,e,v] of costs) {
        if(count === n-1) break;
        if(!findParent(s, e, parent)) {
            answer += v
            count++;
            unionParent(s, e, parent)
        }
    }
    return answer;
}