let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
let NM = input[0].split(' ')
input.shift()
let N = +NM[0]
let M = +NM[1]
let tempArr = input[0].split(' ')
let arr = []
let answer = 0
let count = 0
let flag = 0 // flag가 0인경우 : 음수마지막, flag가 1인경우 : 양수마지막


for (let i = 0; i < tempArr.length; i++) {
    arr.push(+tempArr[i])
}

arr = arr.sort((a, b) => a - b)

if (Math.abs(arr[0]) >= Math.abs(arr[arr.length - 1])) {
    flag = 0
} else flag = 1

// 마지막으로 끝나는 수 구하기
if (arr.length === 1) { console.log(arr[0]) }
else {
    if (flag === 0) {
        answer = Math.abs(arr[0])
        count = 0
        while (count < M) {
            count++
            if (arr[0] < 0) arr.shift()
            else continue
        }
    } else if (flag === 1) {
        answer = Math.abs(arr[arr.length - 1])
        count = 0
        while (count < M) {
            count++
            if (arr[arr.length - 1] >= 0) arr.pop()
            else continue
        }
    }

    while (arr.length > 0) {
        if (arr[0] <= 0) {
            answer += Math.abs(arr[0]) * 2
            count = 0
            while (count < M) {
                count++
                if (arr[0] <= 0) arr.shift()
                else continue
            }
        }
        if (arr[0] > 0) {
            count = 0
            answer += Math.abs(arr[arr.length - 1]) * 2
            while (count < M) {
                count++
                if (arr[arr.length - 1] >= 0) arr.pop()
                else continue
            }
        }
    }

    console.log(answer)
}