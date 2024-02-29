const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input.shift());
const question = input[0].split(' ').map(Number);
const setQuestion = new Set(question);
const sortSetQuestion = [...setQuestion].sort((a, b) => a - b);
const answer = []

for (const num of question) {
    const index = binarySearch(num, sortSetQuestion);
    answer.push(index)
}

function binarySearch(target, Arr) {
    let low = 0;
    let high = Arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (target === Arr[mid]) {
            return mid;
        } else if (target > Arr[mid]) {
            low = mid + 1;
        } else if (target < Arr[mid]) {
            high = mid - 1;
        }
    }

    return false;
}

console.log(answer.join(' '))
