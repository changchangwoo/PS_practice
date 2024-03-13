const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const N = Number(input.shift())
for (let i = 0; i < N; i++) {
    let rest = Number(input.shift())
    let Q = 0;
    let D = 0;
    let N = 0;
    let P = 0;
    if (Math.floor(rest / 25) > 0) {
        Q = Math.floor(rest / 25)
        rest = rest % 25

    }
    if (Math.floor(rest / 10) > 0) {
        D = Math.floor(rest / 10)
        rest = rest % 10
    }
    if (Math.floor(rest / 5) > 0) {
        N = Math.floor(rest / 5)
        rest = rest % 5

    }
    P = rest
    console.log(Q,D,N,P)
}