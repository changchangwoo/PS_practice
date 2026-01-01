function solution(phone_book) {
    var answer = true;
    const sort_book = phone_book.sort((a, b) => a.length - b.length)
    const hash = new Map();
    for(item of sort_book) {
        let str = ''
        for(char of item) {
            str += char
            if(hash.has(str)) return false
        }
        hash.set(item, true) 
    }
    return answer;
}