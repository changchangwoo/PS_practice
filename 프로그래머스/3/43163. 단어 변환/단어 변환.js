function solution(begin, target, words) {
    var answer = 0;
    return answer;
}function solution(begin, target, words) {
    var count = 0;
    let queue = []
    let visited = []
    queue.push([begin, count])
    while (queue.length != 0) {
        [q, count] = queue.shift()
        if(q === target) return count
        words.forEach(element => {
            if(visited.includes(element)) return
            let non_equal = 0
            for (let i = 0; i < element.length; i++) {
                if (q[i] !== element[i]) non_equal++
            }
            if (non_equal === 1) {
                queue.push([element, ++count])
                visited.push(element)
            }
        });
    }

    return 0;
}