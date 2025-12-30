const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const M = +input.shift();
const arr = input.map((item) => +item)

for (item of arr) {
    let count = 0;
    while (item > 1) {
        if (item % 2 === 1) {
            count++;
            item = (item - 1) / 2 + 1;
        } else {
            item = item / 2;
        }
    }
    console.log(count)
}