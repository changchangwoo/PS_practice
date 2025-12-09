const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = Number(input.shift());
const arr = input.shift().split(' ')
const visited = new Array(10).fill(false)
const numbers = [];
const answers = []
const checkNumbers = (prev, cur, sign) => {
    if (sign === "<" && (prev < cur)) {
        return true
    }
    if (sign === ">" && (prev > cur)) {
        return true
    }
    return false
}
const dfs = (prev) => {
    if (numbers.length === N + 1) {
        answers.push(numbers.join(''))
        return
    }
    for (let i = 0; i <= 9; i++) {
        if (visited[i]) continue
        if (numbers.length >= 1 && (!checkNumbers(prev, i, arr[numbers.length - 1]))) continue
        numbers.push(i)
        visited[i] = true
        dfs(i);
        numbers.pop();
        visited[i] = false
    }
}
dfs(0);
let sortAnswers = answers.sort()
console.log(sortAnswers[sortAnswers.length - 1])
console.log(sortAnswers[0])
