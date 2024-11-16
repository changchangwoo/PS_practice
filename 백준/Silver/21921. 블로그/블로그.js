const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
const hash = new Map();
let curV = 0;
let maxV = 0;
let maxCount = 0;

for(let i = 0; i <= N - M; i++ ){
    if(i === 0) {
        for(let j = 0; j < i+M; j++) {
            curV = curV+ arr[j]
        }
        maxCount = 1
        maxV = curV
    } else {
        curV = curV - arr[i-1] + arr[i+M-1]
        if(curV === maxV) {
            maxCount++;
        } else if(curV > maxV) {
            maxV = curV
            maxCount = 1
        }
    }
}

if(maxV === 0) console.log('SAD')
else {
console.log(maxV)
console.log(maxCount)
}