const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input.shift());
let arr = [];

for (let i = 0; i < N; i++) {
    arr.push(+input[i]);
}

arr = arr.sort((a, b) => a - b);

console.log(getAvg(arr));
console.log(getMid(arr));
console.log(getMode(arr));
console.log(getRange(arr));

function getAvg(arrArg) {
    const sum = arrArg.reduce((acc, num) => acc + num, 0);
    const avg = Math.round(sum / arrArg.length);
    return Object.is(avg, -0) ? 0 : avg;
}

function getMid(arrArg) {
    const mid = Math.floor(arrArg.length / 2);
    return arrArg.length % 2 === 0 ? (arrArg[mid - 1] + arrArg[mid]) / 2 : arrArg[mid];
}

function getRange(arrArg) {
    return arrArg[arrArg.length - 1] - arrArg[0];
}

function getMode(arrArg) {
    const counts = new Map();
    arrArg.forEach((num) => {
        counts.set(num, (counts.get(num) || 0) + 1);
    });

    const sortedCounts = [...counts].sort((a, b) => b[1] - a[1]);

    return sortedCounts.length >= 2 && sortedCounts[0][1] === sortedCounts[1][1]
        ? sortedCounts[1][0]
        : sortedCounts[0][0];
}
