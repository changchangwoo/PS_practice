/*
최대 2명씩
가장 작은 사람은 가장 큰 사람이랑 타야한다
*/

function solution(people, limit) {
    people = people.sort((a,b) => a-b)
    let count = 0
    while(people.length > 0) {
        if(people[0] + people[people.length-1] > limit) {
            people.pop()
            count++;
        } else {
            people.shift()
            people.pop()
            count++;
        }
    }
    return count
}