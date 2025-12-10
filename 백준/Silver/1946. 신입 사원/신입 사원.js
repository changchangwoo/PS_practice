let input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const T = Number(input.shift())
const answers = []
for (let i = 0; i < T; i++) {
    const N = Number(input.shift())
    const arr = input.splice(0, N).map((line) => line.split(' ').map(Number))
    const sortedArr = arr.sort((a, b) => a[0] - b[0])
    let target = sortedArr[0][1]
    let count = 0
    for (let i = 0; i < N; i++) {
        if (sortedArr[i][1] <= target) {
            target = sortedArr[i][1]
            count++;
        }

    }
    answers.push(count)
}

console.log(answers.join("\n"))