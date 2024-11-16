const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(Number)
const arr = []
const hash = new Map();

for (let i = 1; i <= N; i++) {
    if (input[i].trim().length < M) {
        continue;
    }
    arr.push(input[i].trim())
}

for (let i = 0; i < arr.length; i++) {
    if (!hash.has(arr[i])) hash.set(arr[i], 1)
    else {
        hash.set(arr[i], hash.get(arr[i]) + 1)
    }
}

let sortArr = [...hash].sort((a, b) => {
    if (b[1] === a[1]) {
        if (b[0].length === a[0].length) {
            return a[0].localeCompare(b[0])
        }
        return b[0].length - a[0].length
    }
    return b[1] - a[1]
})

const answer = sortArr.map((value) => value[0])
console.log(answer.join('\n'))
