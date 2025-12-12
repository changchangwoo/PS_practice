const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n")
const N = Number(input.shift());
const arr = input.shift().split(' ').map(Number)
const exp = input.shift().split(' ').map(Number)
// 0 : 덧셈, 1 : 뺄셈, 2 : 곱셈, 3 : 나눗셈
const answer = []
const exp_line = []
const exp_count = [0, 0, 0, 0]
const calcNumber = (exp_line) => {
    let num = arr[0]
    for(let i = 0; i < N-1; i++) {
        switch(exp_line[i]) {
            case 0:
                num += arr[i+1]
                break;
            case 1:
                num -= arr[i+1]
                break;
            case 2:
                num *= arr[i+1]
                break;
            case 3:
                if(num < 0) {
                    num *= -1
                    num = -Math.floor(num / arr[i+1])
                } else {
                num = Math.floor(num / arr[i+1])
                }
                break;
        }
    }
    if(num === -0) num = 0
    return num
}
const dfs = () => {
    if(exp_line.length === N-1) {
        answer.push(calcNumber(exp_line))
        return
    }
    for(let i = 0; i < 4; i++) {
        if(exp_count[i] < exp[i]) {
        exp_line.push(i)
        exp_count[i] = exp_count[i] + 1;
        dfs();
        exp_count[i] = exp_count[i] - 1;
        exp_line.pop();
        }
    }
}
dfs();
console.log(Math.max(...answer))
console.log(Math.min(...answer))