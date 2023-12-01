function solution(people, limit) {
    let count = 0;
    people = people.sort((a,b)=>a-b)
    while(true) {
        if(people[0] + people[people.length-1] <= limit){
            people.shift()
            people.pop()
            count++;
        } else {
            people.pop()
            count++;
        }
        if(people.length === 0)break
    }
    return count
}

// 문제에 대한 접근은 좋았는데 pop이 아닌 shift에 매몰되어있었음
// 코테에서 shift는 잘 안쓰니까 pop을 위주로 풀어가자 << shift는 배열에서 인덱스 값을 변경해서
// 괜히 피곤해질수도있음;
console.log(solution([70, 50, 80, 50], 100))