const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const [N, M, B] = input.shift().split(' ').map(Number)

let standard = []
for (let i = 0; i < N; i++) {
    input[i] = input[i].split(' ').map(Number)
    standard.push(...input[i])
}
standard = new Set(standard)
standard = [...standard]
let min = Math.min(...standard)
let max = Math.max(...standard)
let times = []

const flattenedAndSorted = input.flat().sort((a, b) => b - a);

for (let i = min; i <= max; i++) {
    // 한 사이클
    let inventory = B;
    let time = 0
    for (let j = 0; j < N * M; j++) {
        if (i < flattenedAndSorted[j]) {
            time += (flattenedAndSorted[j] - i) * 2
            inventory += flattenedAndSorted[j] - i
        } else if (i > flattenedAndSorted[j]) {
            if (inventory - (i - flattenedAndSorted[j]) < 0) {
                time = 0
                break
            }
            inventory -= (i - flattenedAndSorted[j])
            time += (i - flattenedAndSorted[j])
        }
    }
    if (time != 0) times.push({ height: i, time: time })
}

times.sort((a, b) => {
    if (a.time === b.time) {
        return b.height - a.height;
    } else {
        return a.time - b.time;
    }
});

if(times.length === 0) {
    console.log(0, standard[0])
} else {
console.log(times[0].time, times[0].height)
}