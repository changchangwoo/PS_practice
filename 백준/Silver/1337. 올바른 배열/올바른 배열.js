/*
올바른 배열 = 어떤 배열 속 원소 중 5개가 연속적인 것
올바른 배열이 되기 위해 추가되어야할 원소의 개수 출력
삭봐도 투포인터
배열이 올바른 배열이 되기 위헤 필요한 '최소개수'

어떻게 해야 올바른 배열인지 판단할 수 있을까
=> 시간이 많으니 그냥 해당하는 수를 5개 펼치고 비교
*/

const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const N = (Number(input.shift()))
const arr = []
let max = 0;
for (let i = 0; i < N; i++) {
    arr.push(Number(input[i]))
}
if (arr.length < 5) {
    checkRightArr(arr)
} else {
    let sIdx = 0
    let eIdx = 4
    while (eIdx < N) {
        let sortArr = arr.sort((a, b) => a -b).slice(sIdx,eIdx+1)
        checkRightArr(sortArr)
        sIdx++;
        eIdx++;
    }
}

console.log(5-max)

function checkRightArr(arr) {
    for (let i = 0; i < 5; i++) {
        let rightArr = []
        for (let j = 0; j < 5; j++) {
            rightArr.push(arr[i] + j)
        }
        compareCount = compareArr(arr, rightArr)
        max = Math.max(max, compareCount)
    }
}

function compareArr(arr1, arr2) {
    let rightCount = 0
    for(let i = 0; i < 5; i++)  {
        if(arr2.includes(arr1[i])) rightCount++;
    }
    return rightCount
}
