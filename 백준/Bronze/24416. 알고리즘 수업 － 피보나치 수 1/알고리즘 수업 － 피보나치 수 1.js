const input = Number(require('fs').readFileSync("./dev/stdin").toString().trim().split('\n'));


const dpFibonacci = (n) => {
    DP = []
    DP[1] = 1;
    DP[2] = 1;
    for (let i = 3; i <= n; i++) {
        DP[i] = DP[i - 2] + DP[i - 1]
    }
    return n - 2
}

const recurFibonacci = (n) => {
    if (n === 1 || n === 2) return 1
    return recurFibonacci(n - 1) + recurFibonacci(n - 2);
}

console.log(recurFibonacci(input), dpFibonacci(input))
