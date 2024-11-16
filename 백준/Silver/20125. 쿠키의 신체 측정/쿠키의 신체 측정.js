const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const N = Number(input[0])

const arr = []
for(let i = 1; i < input.length; i++) {
    arr.push(input[i].trim().split(''))
}

let headFlag = false;
let leftLength = 0;
let rightLength = 0;
let waistLength = 0;
let leftLegLength = 0;
let rightLegLength = 0;
let heartX = 0;
let heartY = 0;

for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
        if(arr[i][j] === "*") {
            if(!headFlag) { // 심장 위치 구하기
                headFlag = true
                heartX = i+1
                heartY = j
            }

            if((i === heartX) && j < heartY) { // 왼팔
                leftLength++;
            } else if ((i === heartX) && j > heartY) { // 오른팔
                rightLength++;
            }

            if((j === heartY) && i > heartX) { // 허리
                waistLength++;
            }

            if((j === heartY-1) && i > heartX) {
                leftLegLength++;
            }
            if((j === heartY+1) && i > heartX) {
                rightLegLength++;
            }
        }
    }
}

console.log(heartX+1, heartY+1)
console.log(leftLength, rightLength, waistLength, leftLegLength, rightLegLength)