/*
1. 5장 같은색, 숫자 연속적 => 가장 높은 수 + 900
2. 4장 숫자 같을때 => 같은 수 + 800
3. 3장 숫자 같고 2장 숫자 같음 => 3장 같은 수 * 10 + 2장이 같은 수 + 700
4. 5장 색깔 같을 뗴 => 가장 높은 수 + 600
5. 5장 숫자 연속적 => 가장 높은 숫자 + 500
6. 3장 같을 떄 => 같은 숫자 + 300
7. 2장 같고 2장 같을 떄 => 큰 숫자 * 10 + 작은 숫자 + 300
8. 2장 같을 떄 => 같은 숫자 + 200
9. 그 어떤 경우도 아닐 때 => 가장 높은 숫자 + 100

식별 순서
- 플러시
- 줄

- 집합 환산
- 집합 개수 2 => 포카드, 풀하우스
- 집합 개수 3 => 트리플, 투페어
- 집합 개수 4 => 원페어
- 집합 개수 5 => 줄, 하이, 스티플
*/

let input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const result = []
const patterns = []
let numbers = []
input.forEach((element,) => {
    const [pattern, number] = element.trim().split(' ')
    patterns.push(pattern)
    numbers.push(Number(number))
});
numbers = numbers.sort((a, b) => a - b)

const isFlush = new Set(patterns).size === 1 ? true : false
const setNumbers = new Set(numbers)

if (isFlush) result.push(Math.max(...numbers) + 600)
if (setNumbers.size === 2) {
    const [v1, v2] = [...setNumbers]
    let v1_c = 0;
    let v2_c = 0;
    numbers.forEach(num => {
        if (num === v1) v1_c++;
        if (num === v2) v2_c++;
    });
    if (v1_c === 4) result.push(800 + v1)
    if (v2_c === 4) result.push(800 + v2)
    if (v1_c === 3) result.push(700 + (v1 * 10) + v2)
    if (v2_c === 3) result.push(700 + (v2 * 10) + v1)
}
if (setNumbers.size === 3) {
    const [v1, v2, v3] = [...setNumbers]
    let v1_c = 0;
    let v2_c = 0;
    let v3_c = 0;
    numbers.forEach(num => {
        if (num === v1) v1_c++;
        if (num === v2) v2_c++;
        if (num === v3) v3_c++;
    });
    if (v1_c === 3) result.push(v1 + 400)
    if (v2_c === 3) result.push(v2 + 400)
    if (v3_c === 3) result.push(v3 + 400)

    if (v1_c === 2)
        v2_c === 2 ? result.push(
            Math.max(v1, v2) * 10 + Math.min(v1, v2) + 300
        ) : result.push(
            Math.max(v1, v3) * 10 + Math.min(v1, v3) + 300
        )

    if (v2_c === 2)
        v1_c === 2 ? result.push(
            Math.max(v2, v1) * 10 + Math.min(v2, v1) + 300
        ) : result.push(
            Math.max(v2, v3) * 10 + Math.min(v2, v3) + 300
        )

    if (v3_c === 2)
        v1_c === 2 ? result.push(
            Math.max(v3, v1) * 10 + Math.min(v3, v1) + 300
        ) : result.push(
            Math.max(v3, v2) * 10 + Math.min(v3, v2) + 300
        )
}


if (setNumbers.size === 4) {
    const [v1, v2, v3, v4] = [...setNumbers]
    let v1_c = 0;
    let v2_c = 0;
    let v3_c = 0;
    let v4_c = 0;
    numbers.forEach(num => {
        if (num === v1) v1_c++;
        if (num === v2) v2_c++;
        if (num === v3) v3_c++;
        if (num === v4) v4_c++;
    });

    if (v1_c === 2) result.push(v1 + 200)
    if (v2_c === 2) result.push(v2 + 200)
    if (v3_c === 2) result.push(v3 + 200)
    if (v4_c === 2) result.push(v4 + 200)
}

if (setNumbers.size === 5) {
    let isStraight = true
    const maxNum = Math.max(...numbers)
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i - 1] + 1 !== numbers[i]) {
            isStraight = false
            break;
        }
    }
    if (isStraight && isFlush) {
        result.push(maxNum + 900)
    } else if (isStraight) {
        result.push(maxNum + 500)
    } else {
        result.push(maxNum + 100)
    }
}
console.log(Math.max(...result))