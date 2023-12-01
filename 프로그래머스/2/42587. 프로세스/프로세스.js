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