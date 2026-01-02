/*
수가 크지 않으니 매 순회마다 가장 큰 걸 찾고 그거 나올때까지 반복
*/

function solution(priorities, location) {
    var answer = 0;
    const stack = []
    for(let i = 0; i < priorities.length; i++) {
        stack.push({pr : priorities[i], id : i})
    }
    let max = [...stack].sort((a, b) => b.pr - a.pr)[0].pr
    while(true) {
        let item = stack.shift();
        if(item.pr === max && item.id === location) {
                    answer++;
                    break;
        } else if (item.pr === max) {
                    answer++;
                    max = [...stack].sort((a, b) => b.pr - a.pr)[0].pr
            
        } else {
            stack.push(item)
        }
    }
    return answer;
}