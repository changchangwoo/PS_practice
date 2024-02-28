let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
let N = Number(input.shift())
let arr = []
let answer = 0

for(let i = 0; i < N; i++) {
    arr.push(+input[i])
}

let standard = arr[N-1]

for(let i = N-2; i >= 0; i--) {
    if(standard <= arr[i]) {
        while(true) {
            if(arr[i] < standard) break
            arr[i]--;
            answer++
        }
    }
    standard = arr[i]
}

console.log(answer)