const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number)
const arr = []

for(let i = 0; i < N; i++) {
    arr.push(+input[i])
}

arr.sort((a,b)=>a-b)

console.log(binarySearch(arr[arr.length-1]))

function binarySearch(max) {
    let low = 0
    let high = max
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if(getLancable(mid) >= M) {
            low = mid + 1
        } else if (getLancable(mid) < M ) {
            high = mid -1
        }
    }
    return high
}

function getLancable(length) {
    let sum = 0
    for(let i =0; i < N; i++) {
        sum += Math.floor(arr[i] / length)
    }
    return sum
}