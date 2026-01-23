const [N, M] = require('fs').readFileSync("./dev/stdin").toString().trim().split(' ').map(Number)
const queue = []
let limit = 100001;
const visited = new Array(100001).fill(false)
queue.push([N, 0])
while (queue.length > 0) {
    const [cur, count] = queue.shift();
    if (visited[cur]) continue;
    visited[cur] = true
    if (cur === M) {
        console.log(count)
        return
    }
    const nextMoves = [
        [cur * 2, 0],
        [cur + 1, 1],
        [cur - 1, 1],
    ];
    for (const [next, cost] of nextMoves) {
        if (next >= limit || next < 0) continue;
        if (visited[next]) continue;
        if (cost === 0) queue.unshift([next, count])
        else queue.push([next, count + cost])
    }
}