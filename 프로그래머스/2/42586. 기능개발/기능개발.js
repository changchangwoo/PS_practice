/*
100 - 95
5 * 1

*/
function solution(progresses, speeds) {
    var answer = [];
    let arr = []
    for(let i = 0; i < progresses.length; i++) {
        let sum = 0;
        let count = 0;
        while(100-progresses[i] > sum) {
            sum += speeds[i]
            count++;
        }
        arr.push(count)
    }
    let start = arr.shift()
    let count = 1
    for(let i = 0; i < arr.length; i++) {
        if(start >= arr[i]) {
            count++;
        } else {
            start = arr[i]
            answer.push(count)
            count = 1
        }
    }
    answer.push(count)
    return answer;
}
