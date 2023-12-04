function solution(operations) {
    answer = []
    operations.forEach(element => {
        element = element.split(' ')
        if (element[0] === 'I') {
            answer.push(element[1])
            // 삽입 로직
        } else {
            answer.sort((a, b) => (a - b))
            if (element[1][0] === '-') {
                answer.shift()
            } else {
                answer.pop()
            }
        }
    });
    answer.sort((a, b) => (a - b))
    if (answer.length === 0) answer = [0, 0]
    if (answer.length === 1) {
        if(answer[0] > 0) answer = [0, +answer[0]]
        else if(answer[0] < 0) answer = [+answer[0], 0]
        else if(answer[0] === 0) answer = [0,0]
    }
    else answer = [+answer[answer.length - 1], +answer[0]]
    return answer
}