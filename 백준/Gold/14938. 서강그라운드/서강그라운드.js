const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const [n, m, r] = input.shift().split(' ').map(Number)
const t = input.shift().split(' ').map(Number)
const arr = input.map((v) => v.split(' ').map(Number))

const dist = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(Infinity))
for (let i = 1; i <= n; i++) dist[i][i] = 0
for (const [s, e, v] of arr) {
    dist[s][e] = Math.min(dist[s][e], v)
    dist[e][s] = Math.min(dist[e][s], v)
}
for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
        }
    }
}

const answer = []
for (let i = 1; i <= n; i++) {
    let temp = []
    for (let j = 1; j <= n; j++) {
        if (dist[i][j] <= m && dist[i][j] !== Infinity) temp.push(t[j - 1])

    }
    answer.push(temp.reduce((acc, cur) => acc + cur, 0))
}

console.log(Math.max(...answer))
