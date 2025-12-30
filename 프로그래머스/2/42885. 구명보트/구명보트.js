/*
구명보트 최대한 적게 사용 => 가장 몸무게 적은 사람과 많은 사람이 탑승
몸무게가 초과되는 경우, 뒤 인덱스를 한칸 올리면서 비교 => count + 1
정상 범위의 경우, 앞 인덱스를 올리고 +1, pop();
50 50

*/
function solution(people, limit) {
    var answer = 0;
    const sorted_people = people.sort((a, b) => a - b);
    let startIdx = 0;
    while(startIdx < sorted_people.length) {
        let start = sorted_people[startIdx] 
        let end = sorted_people[sorted_people.length - 1]
        if(start + end <= limit) startIdx++;
        answer++;
        sorted_people.pop();
    }
    return answer;
}