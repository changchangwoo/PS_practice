/*
입력된 아이디와 유사하면서 규칙에 맞는 아이디 추천해주는 프로그램
- 3자 이상, 15자 이하
- 알파벳 소문자, 숫자, -, _, . 만 사용 가능
- .는 처음과 끝 사용 불가능, 연속 사용 불가능
*/

const FILTER_ARR = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "v", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "_", "."]

function solution(new_id) {
    let lowerId = new_id.split('').map((item) => item.toLowerCase()).map((item) => {
        if (FILTER_ARR.includes(item)) return item
    }).join('').split('')
    let flag = true
    if (lowerId[0] === ".") flag = false
    for (let i = 1; i < lowerId.length; i++) {
        if (lowerId[i] === ".") {
            if (flag === false) lowerId[i] = undefined
            else {
                flag = false
            }
        } else {
            flag = true
        }
    }
    lowerId = lowerId.join('').split('')
    if (lowerId[0] === ".") lowerId[0] = undefined;
    if (lowerId[lowerId.length - 1] === ".") lowerId[lowerId.length - 1] = undefined
    lowerId = lowerId.join('').split('')
    if (lowerId.length === 0) lowerId.push("a")
    lowerId = lowerId.map((item, idx) => {
        if (idx < 15) return item
    })
    lowerId = lowerId.join('').split('')
    if (lowerId[0] === ".") lowerId[0] = undefined;
    if (lowerId[lowerId.length - 1] === ".") lowerId[lowerId.length - 1] = undefined

    while (lowerId.length <= 2) {
        lowerId.push(lowerId[lowerId.length - 1])
    }
    answer = lowerId.join('')
    return answer

}

solution(".")