const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n')
const N = Number(input.shift());
const arr = input.map((item) => item.split(' ').map(Number)).sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]
    else return a[1] - b[1]
}
)


let prev_end = -1;
let answer = 0;

arr.forEach(([start, end]) => {
    if (start >= prev_end) {
        answer++;
        prev_end = end
        // console.log(`in- ${start}, ${end}`)
    }
})


console.log(answer)