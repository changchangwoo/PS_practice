function solution(s) {
    var answer = '';
    s = s.split(' ')
    s.forEach(element => {
        var str = ''
        for (let i = 0; i < element.length; i++) {
            if (i === 0) str += element[i].toUpperCase()
            else str += element[i].toLowerCase()
        }
        answer += str + ' '
    });
    return answer.slice(0, -1)
}