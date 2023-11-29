function solution(number, k) {
    list = []
    for(let i =0; i < number.length; i++) {
        list.push({num : Number(number[i]), flag : false })
    }
    var answer = '';
    var result = []
    len = list.length - k
    for (i = 0; i < len; i++) {
        max = list[i].num
        for (j = 0; j <= len+i; j++ ) {
            if(max < list[j].num) {
                max = list[j].num
            }
        }
        result.push(max)
    }
    console.log(result)
    return number.length - k
}

console.log(solution("1924", 2))
