let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")
let [N, M] = input[0].split(' ').map(Number)
let hash = new Map()
input.shift()

for(let i = 0; i < N; i++) {
    let [id, pw] = input[i].split(' ')
    hash.set(id.trim(), pw.trim())
}

input = input.slice(N, N+M)

for(let i = 0; i < M; i++) {
    console.log(hash.get(input[i].trim()))
}