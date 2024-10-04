function solution(numbers) {
    let stringNumbers = numbers.map(number => String(number))
    let answer = stringNumbers.sort((a,b) => (b + a) - (a + b))
    return answer[0] == 0 ? "0" : answer.join('')
}