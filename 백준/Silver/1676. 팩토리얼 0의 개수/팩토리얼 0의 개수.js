const N = Number(require('fs').readFileSync("/dev/stdin").toString().trim());
let count = 0;

function factorial(n) {
    if (n === 0n || n === 1n) {
        return 1n;
    } else {
        return n * factorial(n - 1n);
    }
}

let str = String(factorial(BigInt(N)));
str = str.split('');

for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '0') count++;
    else {
        console.log(count);
        return;
    }
}
