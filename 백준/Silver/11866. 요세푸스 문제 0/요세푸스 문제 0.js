const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const queue = []
const reuslt = []
let count = 1
for(let i = 1; i <= N; i++) {
    queue.push(i)
}
while(reuslt.length !== N) {
    if(count === M) {
        reuslt.push(queue.shift())
        count = 1
    } else {
        queue.push(queue.shift())
        count++
    }
}

console.log("<"+reuslt.join(', ').trim()+">")