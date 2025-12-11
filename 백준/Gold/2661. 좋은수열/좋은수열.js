
const N = Number(require('fs').readFileSync("/dev/stdin").toString().trim().split("\n"))
const arr = []
let flag = false
const checkGoodSequence = (arr) => {
    let len = arr.length
    for (let i = 1; i <= Math.floor(len / 2); i++) {
        const a = arr.slice(len - i)
        const b = arr.slice(len - i * 2, len - i)
        if (a.join('') === b.join('')) return false
    }
    return true
}
const dfs = () => {
    if (flag) return
    if (!checkGoodSequence(arr)) return
    if (arr.length >= N) {
        console.log(arr.join(''))
        flag = true
        return
    }
    for (let i = 1; i <= 3; i++) {
        arr.push(i)
        dfs();
        arr.pop();
    }
}
dfs();
