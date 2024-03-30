function solution(n, words) {
    var answer = [];
    firstAlpha = words[0][0]
    lastAlpha = words[0][words[0].length-1]
    const primaryCheck = [words[0]]
    let flag = 0
    let idx = 0
    words.shift()
    let count = 1
    for(let word of words) {
        count++
        if(count > n) {
            idx++
            count =1
        }
        if(word[0] !== lastAlpha || primaryCheck.includes(word)) {
            flag = 1
            break
        } else {
            primaryCheck.push(word)
            lastAlpha = word[word.length-1]
        }

    }
    if( flag === 0) return [0,0]
    else return [count, idx+1]

}