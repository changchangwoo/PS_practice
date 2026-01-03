/*
n편 중, h번 이상 인용된 논문이 h편 이상, 나머지 논문이 h번 이하 인용
최대값은 중간 값이 되야함
cit 중복 값 허용?

*/
function solution(citations) {
    var answer = 0;
    const temp = []
    const s_cit = citations.sort((a, b) => a-b);
    const max = Math.max(...s_cit);
    for(let i = 1; i <= max; i++) {
        let count = 0;
        for(let j = 0; j < s_cit.length; j++) {
            if(i <= s_cit[j]) count++;
        }
        if(count >= i) answer = i
    }
    
    return answer;
}