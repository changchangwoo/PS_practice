function solution(answers) {
    const num = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]    
    const result = [0, 0, 0]
    const answer = []
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < answers.length; j++) {
            if(answers[j] === num[i][j % num[i].length]) {
                result[i]++;
            }
        }
    }
    max = Math.max(...result)
    result.forEach((v, idx) => {
        if(v === max) answer.push(idx+1)
    })
        
    return answer;
}