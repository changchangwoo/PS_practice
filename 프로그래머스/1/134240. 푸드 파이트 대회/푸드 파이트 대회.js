function solution(food) {
    var answer = '';
    let count;
    for(let i = 1; i <= food.length; i++) {
        food[i]%2 == 1 ? count = food[i]-1 : count = food[i]
        for(let j=0; j <count/2; j++) answer += i
    }
    answer += "0";
    for(let i = answer.length-2; i >= 0; i--) {
        answer += answer[i]
    }
    
    return answer;
}