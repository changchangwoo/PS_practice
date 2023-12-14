let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let element = input.join(' ')
let flag = 0
let result = []
let arr = []
let tag_arr = []
for (let i = 0; i < element.length; i++) {
    // 맨 처음 태그로 시작하는 경우
    if (element[i] === '<' && arr.length === 0) {
        tag_arr.push(element[i])
        flag = 1
        continue
    } // 태그로 끝나는 경우 체크
    if (element[i] === '>' && flag === 1) {
        tag_arr.push(element[i])
        result.push(tag_arr.join(''))
        flag = 0
        tag_arr = []
        continue
    } // 공백인 경우에도 태그가 안끝났으면 진행
    else if (flag === 1) {
        tag_arr.push(element[i])
        continue
    }
    if (flag === 0) {
        if (element[i] === ' ') {
            arr = arr.reverse()
            arr.push(element[i])
            result.push(arr.join(''))
            arr = []
        } else if (element[i] === '<') {
            arr = arr.reverse()
            result.push(arr.join(''))
            arr = []
            tag_arr.push(element[i])
            flag = 1
        }
        else {
            arr.push(element[i])
        }
    }
}
if (element[element.length - 1] !== '<') result.push(arr.reverse().join(''))
result = result.join('')
console.log(result.replace(/\n/g, ""));