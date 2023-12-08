function solution(n, m) {
    big_num= Math.max(m, n)
    small_num = Math.min(m, n)
    while(big_num % small_num > 0) {
        console.log(big_num, small_num)
        temp = big_num
        big_num = small_num
        small_num = temp % small_num
    }
    return [small_num, n*m/small_num]
}