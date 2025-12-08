let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")
let arr = []
let answer = []
for (let i = 0; i < input.length; i++) {
    arr.push(+input[i])
}

function combinations(arr, k) {
    const result = [];

    function combine(current, start) {
        if (current.length === k) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            combine(current, i + 1);
            current.pop();
        }
    }

    combine([], 0);
    return result;
}

const resultCombinations = combinations(arr, 7);
for(let i = 0; i < resultCombinations.length; i++) {
    let sum = 0
    for(let j = 0; j < resultCombinations[i].length; j ++) {
        sum += resultCombinations[i][j]
    }
    if(sum === 100) answer = [...resultCombinations[i]]
}
answer = answer.sort((a, b) => a-b)
for(let i = 0; i < answer.length; i++) console.log(answer[i])