// oneline
function oneline ()  {
let fs = require('fs');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
let num = Number(input)
for(let i = 1; i <= num; i++){
    console.log(i)
}
}
// multline

function multline () {
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let count = input[0]
let numbers = [];

for(let i = 1; i < input.length; i++) {
    if(input[i] !== '') {
        numbers.push(input[i].split(' '));
    }
}

for (let i = 0; i < numbers.length; i++) {
    let num1 = Number(numbers[i][0]);
    let num2 = Number(numbers[i][1]);

    console.log(num1 + num2)
}
}

// 잘 풀었는데 출력형식이 이상하다고 할 때 :: console.log(result.replace(/\n/g, ""));