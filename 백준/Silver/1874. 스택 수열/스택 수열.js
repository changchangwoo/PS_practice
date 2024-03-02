let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const N = Number(input.shift())
input = input.map(a => +a)
const stack = []
let answer = ''
let checkCount = 0
let pushCount = 1
let output = ''

while(true) {
    if(stack[stack.length-1] !== input[checkCount]) {
        if(stack[stack.length-1] > input[checkCount]) {
            console.log("NO")
            return
        }
        stack.push(pushCount)
        answer += '+'
        pushCount++
    } else if(stack[stack.length-1] === input[checkCount]) {
        stack.pop()
        answer += '-'
        checkCount++
    }
    if(checkCount === N) break
}

for (let char of answer) {
    output += char + '\n';
}

console.log(output.trim());