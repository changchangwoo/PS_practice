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
