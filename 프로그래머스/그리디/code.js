function solution(n, lost, reserve) {
    lost = lost.sort((a, b) => a - b)
    reserve = reserve.sort((a, b) => a - b)
    for (let i = 0; i < reserve.length; i++) {
        for (let j = 0; j < lost.length; j++) {
            if (reserve[i] === lost[j]) {
                lost.shift()
                reserve.shift()
                i--;
                j--;
            }
            else if (reserve[i] - 1 === lost[j]) {
                lost.shift()
                reserve.shift()
                i--;
                j--;
            } else if (reserve[i] + 1 === lost[j]) {
                lost.shift()
                reserve.shift()
                i--;
                j--;
            }
        }
        console.log(lost,reserve)
    }
    return n - lost.length
}
// [2,3,5,6] [1,2,4,5]

console.log(solution(5, [2, 4], [1, 2, 3, 4, 5])); // 예상 결과: 4
