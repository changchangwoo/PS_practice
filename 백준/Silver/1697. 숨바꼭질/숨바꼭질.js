const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const [N, K] = input.shift().split(' ').map(Number)
const LIMIT = 100000
const visited = new Array(LIMIT).fill(false)
const bfs = (v) => {
    const queue = []
    queue.push([v, 0])
    visited[v] = true
    while (queue.length > 0) {

        let [cv, count] = queue.shift()
        if (cv === K) {
            console.log(count)
            break;
        }
        if (cv - 1 >= 0 && !visited[cv - 1]) {
            queue.push([cv - 1, count + 1])
            visited[cv - 1] = true
        }
        if (cv + 1 <= LIMIT && !visited[cv + 1]) {
            queue.push([cv + 1, count + 1])
            visited[cv + 1] = true
        }

        if (cv * 2 <= LIMIT && !visited[cv * 2]) {
            queue.push([cv * 2, count + 1])
            visited[cv * 2] = true
        }
    }
}

bfs(N)