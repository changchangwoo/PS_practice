const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const T = Number(input.shift())
for (let i = 0; i < T; i++) {
    const [N, M] = input.shift().split(' ').map(Number)
    const arr = input.shift().split(' ').map(Number)
    const queue = []
    for (let j = 0; j < N; j++) {
        queue.push([j, arr[j]])
    }
    arr.sort((a, b) => b - a)
    let count = 1
    while (true) {
        let [no, primary] = queue.shift()
        if(primary === arr[0]) {
            if(no === M) {
                break
            } else {
                arr.shift()
                count++
            }
        } else {
            queue.push([no, primary])
        }
    }
    console.log(count)
}
