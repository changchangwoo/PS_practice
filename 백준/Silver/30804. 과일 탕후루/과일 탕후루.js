const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = Number(input.shift());
const arr = input.shift().split(' ').map(Number);

let startIdx = 0;
let endIdx = 0;
let max = 0;
const hash = new Map();

while (endIdx < N) {
    hash.set(arr[endIdx], (hash.get(arr[endIdx]) || 0) + 1);

    while (hash.size > 2) {
        hash.set(arr[startIdx], hash.get(arr[startIdx]) - 1);
        if (hash.get(arr[startIdx]) === 0) {
            hash.delete(arr[startIdx]);
        }
        startIdx++;
    }

    max = Math.max(max, endIdx - startIdx + 1);
    endIdx++;
}

console.log(max);
