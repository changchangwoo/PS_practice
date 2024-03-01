const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
for(let i = 0; i < input.length; i++) {
    if(input[i] === '0') continue
    if(checkPell(input[i].trim())) console.log('yes')
    else console.log('no')
}

function checkPell(num) {
    const length = Math.floor(num.length/2)
    for(let i = 0; i < length; i++) {
        if(num[i] !== num[num.length-1-i]) return false
    }
    return true
}