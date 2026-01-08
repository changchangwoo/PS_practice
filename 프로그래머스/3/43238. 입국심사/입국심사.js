function solution(n, times) {
    var answer = 0;
    let left = 1;
    let right = Math.max(...times) * n;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        let count = 0;
        for (const time of times) {
            count += Math.floor(mid / time)
        }
        if(count >= n) {
            right = mid - 1
        } else {
            left = mid + 1
            answer = left
        }
    }
    return answer;
}