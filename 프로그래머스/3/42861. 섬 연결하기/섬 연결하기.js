function getParent(parent, idx) {
    if(parent[idx] === idx) return idx
    return parent[idx] = getParent(parent, parent[idx])
}
function unionParent(parent, idx1, idx2) {
    const p1 = getParent(parent, idx1)
    const p2 = getParent(parent, idx2)
    if(p1 < p2) parent[p2] = p1
    else parent[p1] = p2
}
function findParent(parent, idx1, idx2) {
    const p1 = getParent(parent, idx1)
    const p2 = getParent(parent, idx2)
    if(p1 === p2) return true
    return false
}
function solution(n, costs) {
    var answer = []
    const sorted_cost = costs.sort((a, b) => a[2] - b[2]);
    const arr = []
    for(let i = 0; i <= n; i++) arr[i] = i
    for(item of sorted_cost) {
        if(answer.length === n-1) break; 
        const [v1, v2, cost] = item
        if(!findParent(arr, v1, v2)) {
            unionParent(arr, v1, v2)
            answer.push(cost)
        }
    }
    return answer.reduce((acc, cur) => acc + cur, 0)
}