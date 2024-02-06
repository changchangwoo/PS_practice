let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let N = Number(input[0])
let K = Number(input[1])
let count = 0

let arr = new Array(N + 1).fill(true).fill(false, 0, 2)
for (let i = 2; i <= N; i++) {
    for (let j = i; j <= N; j = j + i) {
        if (arr[j] === true) {
            arr[j] = false
            count++;
            if (count === K) {
                console.log(j)
                break
            }
        }
        if(count === K) break
    }
}