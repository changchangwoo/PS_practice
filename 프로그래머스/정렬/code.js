function solution(people, limit) {
    var answer = 0;
    people = people.solution((a,b) => a - b)
    console.log(people)
    return answer;
}

console.log(solution([70, 50, 80, 50],100))