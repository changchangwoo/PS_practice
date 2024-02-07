let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let colors = []
let numbers = []
let answer = []
let nothingCheck = 0

for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(' ')
    colors.push(input[i][0])
    numbers.push(+input[i][1])
}

answer.push(checkRoyalandFlush(colors, numbers))
answer.push(checkFourAndFull(numbers))

let tempNumbers = [...numbers].sort()
if (checkStraight(tempNumbers)) {
    answer.push(Math.max(...numbers) + 500)
}
answer.push(checkTripleAndTwo(numbers))
answer.push(checkOne(numbers))

for(let i = 0; i < answer.length; i++) {
    nothingCheck += answer[i]
}

if(nothingCheck === 0) answer.push(Math.max(...numbers) + 100)

console.log(Math.max(...answer))

// 숫자와 문자 담은 배열
function checkRoyalandFlush(colors, numbers) {
    let setColors = new Set(colors)
    let tempNumbers = [...numbers].sort()
    if (setColors.size === 1) { // 플러시인 경우
        if (checkStraight(tempNumbers)) { // 스트레이트 플러시
            return Math.max(...numbers) + 900
        } else return Math.max(...numbers) + 600
    } else return 0
}

function checkFourAndFull(numbers) {
    let setNumbers = new Set(numbers)
    let tempNumbers = [...numbers]
    if (setNumbers.size === 2) {
        let hash = new Map()
        for (let i = 0; i < tempNumbers.length; i++) {
            if (hash.has(tempNumbers[i])) {
                hash.set(tempNumbers[i], hash.get(tempNumbers[i]) + 1);
            } else {
                hash.set(tempNumbers[i], 1);
            }
        } // 해시를 통해 더 큰 수 탐색
        hash = [...hash]
        if (hash[0][1] === 4 || hash[1][1] === 4) { // 포카드인 경우
            let four = hash[0][1] > hash[1][1] ? hash[0][0] : hash[1][0]
            return four + 800
        } else if (hash[0][1] === 3 || hash[1][1] === 3) { // 풀하우스 인 경우
            let triple = hash[0][1] > hash[1][1] ? hash[0][0] : hash[1][0]
            let double = hash[0][1] < hash[1][1] ? hash[0][0] : hash[1][0]
            return (triple * 10 + double + 700)
        }
    } else return 0
}

function checkStraight(numbers) {
    let startCheck = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== startCheck) return false
        startCheck += 1
    }
    return true
}

function checkTripleAndTwo(numbers) {
    let setNumbers = new Set(numbers)
    if (setNumbers.size === 3) {
        let hash = new Map()
        for (let i = 0; i < tempNumbers.length; i++) {
            if (hash.has(tempNumbers[i])) {
                hash.set(tempNumbers[i], hash.get(tempNumbers[i]) + 1);
            } else {
                hash.set(tempNumbers[i], 1);
            }
        }
        hash = [...hash]
        if (hash[0][1] === 3 || hash[1][1] === 3 || hash[2][1] === 3) // 트리플인 경우 
        {
            let triple = 0
            for(let i = 0; i < hash.length; i++) {
                if(hash[i][1] === 3) triple = hash[i][0]
            }
            return triple+400
        }
        else if (hash[0][1] === 2 || hash[1][1] === 2 || hash[2][1] === 2) // 투페어인 경우 
        {
            let tempArr = []
            for(let i = 0; i < hash.length; i++) {
                if(hash[i][1] === 2) tempArr.push(hash[i][0])
            }
            return (Math.max(...tempArr) * 10 + Math.min(...tempArr) + 300)
        }
    }
    else return 0
}

function checkOne(numbers) {
    let setNumbers = new Set(numbers)
    if(setNumbers.size === 4) {
        let hash = new Map()
        for (let i = 0; i < tempNumbers.length; i++) {
            if (hash.has(tempNumbers[i])) {
                hash.set(tempNumbers[i], hash.get(tempNumbers[i]) + 1);
            } else {
                hash.set(tempNumbers[i], 1);
            }
        }
        hash = [...hash]
        let two = 0
        for(let i = 0; i < hash.length; i++) {
            if(hash[i][1] === 2) two = hash[i][0] 
        }        
        return two + 200
    } else return 0

}