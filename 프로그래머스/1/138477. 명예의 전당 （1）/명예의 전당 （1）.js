function solution(k, score) {
    let honors = []
    let result = []

    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            honors.push(score[i])
            honors.sort((a,b)=>a-b)
            result.push(honors[0])
        } else {
            if(score[i] > honors[0]) {
                honors.push(score[i])
                honors.shift()
                honors.sort((a,b)=>a-b)
                result.push(honors[0])
            } else {
                result.push(honors[0])
            }
        }
    }

    return result

}