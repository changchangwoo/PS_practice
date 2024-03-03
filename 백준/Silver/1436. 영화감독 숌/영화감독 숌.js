const N = Number(require('fs').readFileSync("/dev/stdin").toString().trim())

let num = 666
let count = 1

while(true) {
    if(count === N) {
        console.log(num)
        return
    }
    num++;
    if(String(num).includes('666')) {
        count++
    }
}