function solution(progresses, speeds) {
    let work = []
    var answer = [];
    for(let i = 0; i < progresses.length; i++) {
        let count = 1
        while(true) {
            if(progresses[i] + count * speeds[i] >= 100) {break;}
            else {count += 1}
        }
        work.push(count)
    }
    let top = work[0]
    let count = 1
    for(let i = 1 ; i < work.length; i++) {
        console.log(work[i])
        if(work[i] <= top) { count += 1}
        else { 
            answer.push(count)
            top = work[i]
            count = 1
        }
    }
    answer.push(count)
    return answer;
}