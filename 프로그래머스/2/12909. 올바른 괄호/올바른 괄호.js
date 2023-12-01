function solution(s) {
    let count = 0
    for (let i = 0 ; i<s.length; i++) {
        if(s[i] === "(") {
            count +=1
        }
        else if (s[i] === ")") {
            if(count ===0) return false
            count -=1
        }
    }
    if(count ===0) return true
    else return false
}