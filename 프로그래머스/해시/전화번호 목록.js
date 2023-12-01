function solution(phone_book) {
    var answer = true;
    const map = new Map()
    phone_book.forEach(element => {
        map.set(element, true)
    });
    phone_book.forEach(element => {
        for(let i = 0; i < element.length; i++) {
            const str = element.slice(0,i)
            if(map.get(str)) answer = false
        }
    });
    return answer;
}
/*
전화번호 부 길이는 1이상 20이하 O(n^2) 가능
문자열의 수가 긴 것 부터 작은 것 순으로 정렬
includes로 찾지말고 0부터 해당 길이 slice값이 맞는지?
이렇게 하니까 효율성 초과남;
=> 동일한 방법으로 작은 길이에서 다음 값에 해당 값이 있는지 찾는 것
풀림 이거는 근데 해시가 아님
해시로 풀려면 모든 값을 다 해시 값으로 저장하고
phone_book의 값에 길이마다 해시를 전부 탐색. 이게 더 빠름
*/

console.log(solution(["123", "456", "789"]))