const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

function factorial(n) {
    if(n===0 || n ===1 ) return 1
    return n * factorial(n-1)
}

console.log(factorial(N)/(factorial(M)*factorial(N-M)))