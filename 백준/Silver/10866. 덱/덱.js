const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const dequeu = [];
let result = '';

for (let i = 0; i < N; i++) {
    if (input[i].trim() === 'front') {
        result += (dequeu.length > 0 ? dequeu[0] : -1) + '\n';
    } else if (input[i].trim() === 'back') {
        result += (dequeu.length > 0 ? dequeu[dequeu.length - 1] : -1) + '\n';
    } else if (input[i].trim() === 'size') {
        result += dequeu.length + '\n';
    } else if (input[i].trim() === 'empty') {
        result += (dequeu.length === 0 ? 1 : 0) + '\n';
    } else if (input[i].trim() === 'pop_back') {
        result += (dequeu.length > 0 ? dequeu.pop() : -1) + '\n';
    } else if (input[i].trim() === 'pop_front') {
        result += (dequeu.length > 0 ? dequeu.shift() : -1) + '\n';
    } else {
        const [command, num] = input[i].split(' ');
        if (command === 'push_back') {
            dequeu.push(+num);
        } else if (command === 'push_front') {
            dequeu.unshift(+num);
        }
    }
}

console.log(result.trim());
