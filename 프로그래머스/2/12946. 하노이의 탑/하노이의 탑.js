function solution(n) {
    var answer = [];
    function hanoi(n, start, end, via) {
        if(n === 0) return
        hanoi(n-1, start, via, end)
        answer.push([start, end])
        hanoi(n-1, via, end, start)
    }
    hanoi(n, 1, 3, 2)
    return answer;
}
