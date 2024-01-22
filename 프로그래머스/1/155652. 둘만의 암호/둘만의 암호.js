function solution(s, skip, index) {
    var answer = '';
    for (let i = 0; i < s.length; i++) {
        asciCode = s[i].charCodeAt()
        for(let j = 0; j < index; j++) {
            asciCode = asciCode+1
            if(asciCode > 122) asciCode = 97
            if (!checkChar(asciCode, skip)) {
                j = j-1
            }
        }
        answer += String.fromCharCode(asciCode)
    }
    return answer;
}

function checkChar(asciCode, skip) {
    skip = [...skip]
    for(let i = 0; i < skip.length; i++) {
        if(skip[i].charCodeAt() === asciCode) return false
        }
    return true

}