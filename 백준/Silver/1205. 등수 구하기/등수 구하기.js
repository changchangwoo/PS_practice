/*
점수가 랭킹 리스트에 올라갈 수 없을정도로 낮다면 -1 출력
랭킹리스트 꽉 찬 경우, 새 점수가 이전 점수보다 좋을때만 바뀐다
=> 동일 랭킹의 마지막으로 들어간다
*/
const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, score, P] = input.shift().split(' ').map(Number)
if (N === 0) {
    console.log(1)
    return
}
const arr = input.shift().split(' ').map(Number).sort((a, b) => b - a)
const newRanking = []
let rank = 1;
let diff = 1;
let isTry = false
arr.forEach((el, idx) => {
    if (score > el && !isTry) {
        newRanking.push({ score: score, rank: rank, isMine: true })
        isTry = true
    }
    newRanking.push({ score: el, rank: rank, isMine: false })
});
if (!isTry) newRanking.push({ score: score, rank: rank, isMine: true })

for (let i = 1; i < newRanking.length; i++) {
    if (newRanking[i - 1].score === newRanking[i].score) {
        newRanking[i].rank = rank
        diff++
    } else {
        rank = rank + diff
        newRanking[i].rank = rank
        diff = 1
    }
}

for (let i = 0; i < newRanking.length; i++) {
    if (newRanking[i].isMine === true) {
        console.log(newRanking[i].rank)
        return
    }
    if (i === P - 1) {
        console.log(-1)
        return
    }
}

