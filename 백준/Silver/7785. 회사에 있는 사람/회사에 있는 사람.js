const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(i => i.split(' '))
const n = input.shift()
const hash = new Map(input.map((el => [el[0], el[1]])))
let result = []

hash.forEach((value, key) => {
    if(hash.get(key) === "leave") hash.delete(key)
    else result.push(key)
})

result.sort().reverse()

console.log(result.join('\n'))