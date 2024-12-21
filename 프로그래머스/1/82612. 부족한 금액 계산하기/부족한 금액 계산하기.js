function solution(price, money, count) {
    var answer = 0
    for(let i = 1; i <= count; i++ ) {
        answer = answer + (price * i) 
    }
    console.log(answer)
    if(answer <= money) return 0
    else return answer-money
}