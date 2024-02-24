let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
let arr = []
let NMP = input[0].split(' ')
let N = +NMP[0]
let M = +NMP[1]
let P = +NMP[2]
let curIndex = 0
let flag = 2
let answer = 0

function getRank(ranks, target) {
    let cur = null
    let rank = 1
    let rankAdd = 0
    let checking = 0
    for(let i = 0; i < ranks.length; i++) {
        if(checking === 0 && ranks[i] === target) checking = 1
        else if(checking === 1 && ranks[i] !== target) {
            break
        } 
        if (ranks[i] !== cur) {
            rank += rankAdd
            rankAdd = 1
            cur = ranks[i]
        } else {
            rankAdd++;
        }
    }
    return rank
}

if (N > 0) {
    input[1].split(' ').map(item => arr.push(+item))
    arr.sort((a, b) => b - a)
    for (let i = 0; i < +N; i++) {
        if (M >= arr[i]) {
            if (arr.lastIndexOf(M) === -1) {
                flag = 1
                curIndex = i
                break
            } else {
                flag = 0
                break
            }
        }
    }

    let lastRank = arr.lastIndexOf(M)
    if (flag === 1) arr.splice(curIndex, 0, M)
    if (flag === 0) arr.splice(lastRank + 1, 0, M)
    if (lastRank + 1 >= P) {
        console.log(-1)
    } else if (flag === 2) {
        if (arr.length < P) {
            arr.push(M)
            answer = getRank(arr, M)
            console.log(answer)
        }
        else console.log(-1)
    } else {
        answer = getRank(arr, M)
        console.log(answer)
    }

} else if (N <= 0) {
    console.log(1)
}
