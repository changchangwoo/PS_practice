/*
tic을 나누어서 n이 되는 경우가 가장 최소 일 때를 구함
최대 걸리는 시간은 51초로 임의 가정
Math.floor((tic / time)) = sum
이 sum이 6보다 작은 경ㅇ
*/

function solution(n, times) {
    var answer = 0;
    let left = 0;
    let right = Math.max(...times) * Math.floor(n / times.length)
    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        let sum = 0;
        for(const time of times) {
            sum += Math.floor(mid/time)
        }
        if(sum < n) {
            left = mid + 1
        } else {
            answer = mid
            right = mid - 1
        }
            
    }
    return answer;
}