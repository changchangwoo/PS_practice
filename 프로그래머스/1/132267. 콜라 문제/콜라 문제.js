function solution(a, b, n) {
    let result = 0
    let temp = 0
    while(n >= a) {
        temp = Math.floor(n/a)*b
        result = result + temp
        n = (n%a) + temp
        temp = 0
    }
    return result;
}

console.log(solution(3, 1, 20))