// 해시 태그인데 해시로 안 풀었음; 다음에 해시로 한번 풀어보자

function solution(nums) {
    var answer = 0;
    let set = new Set(nums)
    if(nums.length/2 <= set.size) answer = nums.length/2
    else answer = set.size
    return answer;
}

console.log(solution([3,3,3,2,2,2]))