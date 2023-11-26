function solution(priorities, location) {
    var obj = [];
    let count = 1
    for(let i = 0; i < priorities.length; i++) {
        obj.push({prior : priorities[i], num : i})
    }
    let maxNum = max(obj)
    while(true) {
        if(obj[0].prior === maxNum) {
            if(obj[0].num === location) {
                break
            } else if (obj[0].num != location) {
                count += 1
                obj.splice(0, 1)
                maxNum = max(obj)
            }
        } else {
            obj.push(obj[0])
            obj.splice(0, 1)
        }
    }
    return count
}

function max(obj) {
    let maxVal = obj[0].prior
    obj.forEach(element => {
        if(element.prior > maxVal) {
            maxVal = element.prior
        }
    });
    return maxVal
}
// 가장먼저 max를 통해 우선순위 확인
// [0]값과 max비교 [0] === max인 경우 return 값 1 증가
// 아닌 경우 push로 맨 뒤로 넣기
// 이 경우 겹칠 떄 location 값을 어떻게 구분하지
// 객체타입으로 저장?


console.log(solution([1,1,9,1,1,1],0))