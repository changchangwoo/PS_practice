function solution(s) {
    var answer = '';
    var strs = s.trim().split(' ')
    let arr = []
    for(let str of strs) {
        if(str[0] === '-') {
            str = str.slice(1)
            arr.push(+str * -1)
        }
        else arr.push(+str)
    }
    arr = arr.sort((a,b) => a- b)
    return [arr[0], arr[arr.length-1]].join(' ')
}