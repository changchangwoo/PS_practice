function solution(phone_book) {
    var answer = true;
    const map = new Map()
    phone_book.forEach(element => {
        map.set(element, true)
    });
    phone_book.forEach(element => {
        for(let i = 0; i < element.length; i++) {
            const str = element.slice(0,i)
            if(map.get(str)) answer = false
        }
    });
    return answer;
}