function solution(cacheSize, cities) {
    var answer = 0;
    const stack = []
    if(cities.length === 0) return 0
    for(let city of cities) {
        let convertCity = city.toLowerCase()
        if(stack.includes(convertCity)) {
            answer += 1;
            stack.splice(stack.indexOf(convertCity),1);
        } else {
            answer += 5;
        }
        stack.push(convertCity);
        if(stack.length === cacheSize+1) stack.shift();
    }
    return answer;
}