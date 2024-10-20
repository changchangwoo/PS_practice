let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, L] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number).sort((a,b) => a-b)

let answer = 0;
let end = 0;

for(let i = 0; i < N; i++) {
    if(arr[i] > end) {
        end = arr[i] + L - 0.5;
        answer++;
    }

}

console.log(answer)