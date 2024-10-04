function solution(progresses, speeds) {
    let answer = []
    let time = Math.ceil((100 - progresses[0])/speeds[0]) 
    let stack = [0]
    
    for(let i = 1; i <= progresses.length; i++) {
        if(progresses[i] + (speeds[i] * time) >= 100) {
            stack.push(0)
        }
        else {
            answer.push(stack.length)
            stack = [0]
            time = Math.ceil((100 - progresses[i])/speeds[i])
        } 
    }
    return answer
}