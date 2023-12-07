function solution(s) {
    var hash = new Map()
    var answer = [];
    s = [...s]
    s.forEach((element, i) => {
        if (hash.has(element)) {
            answer.push(i - hash.get(element))
            hash.set(element, i)
        } else {
            hash.set(element, i)
            answer.push(-1)
        }
    });
    return answer;
}