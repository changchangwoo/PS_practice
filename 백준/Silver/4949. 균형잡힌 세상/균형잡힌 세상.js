const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    if (input[i] === '.') {
        break;
    }

    const string = input[i].split('');
    const stack = [];
    let flag = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(" || string[i] === "[") {
            stack.push(string[i]);
        } else if (string[i] === ")" && stack.pop() !== "(") {
            flag = 1;
            break;
        } else if (string[i] === "]" && stack.pop() !== "[") {
            flag = 1;
            break;
        } else if (string[i] === ".") {
            break;
        }
    }

    if (stack.length === 0 && flag === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
