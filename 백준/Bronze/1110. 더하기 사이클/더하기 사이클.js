const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")

let target = input[0].split('');
if (target.length === 1) {
    target.unshift('0')
}
let end = JSON.parse(JSON.stringify(target));

let count = 0;
while (true) {
    let num1 = Number(target.shift());
    let num2 = Number(target.shift());

    target.push(String(num2))
    let str = String(num1 + num2)
    target.push(str[str.length - 1])

    if (count >= 100) break;
    count++;
    // console.log(Number(target.join('')), Number(input[0]))
    if (target.join('') === end.join('')) {
        break;
    }
}

console.log(count)