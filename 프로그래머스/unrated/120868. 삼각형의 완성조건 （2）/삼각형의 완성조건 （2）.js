function solution(sides) {
    var answer = 0;
    sides = sides.sort((a,b)=>a-b)
    for(let i = 1; i <=sides[1]; i++) {
        if(i + sides[0] >sides[1]) answer++
    }
    for(let i = sides[1]+1; i < sides[0]+sides[1]; i++) {
        answer+=1
    }
    
    return answer;
}
