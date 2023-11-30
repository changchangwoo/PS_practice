function solution(myString, pat) {
    let idx = 0
    for (let i = 0; i < myString.length; i++) {
        slice_word = myString.slice(i, i + pat.length)
        if (slice_word === pat) {
            idx = i + pat.length
        }
    }
    return myString.slice(0, idx)
}