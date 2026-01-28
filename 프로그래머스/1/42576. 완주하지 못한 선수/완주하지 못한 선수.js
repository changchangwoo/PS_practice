/*
완주자는 참여자보다 1작다
참여자에는 있으나, 완주자에는 없는 경우
동명이인이 있을 수 있다.
해시를 통해 저장하는 경우, 해시의 값을 구분해야한다.


*/
function solution(participant, completion) {
    /*
    1. 해시에 키값으로 참여자 이름, 밸류값으로 이름의 수 제공
    2. 완주자에서 참여자를 가져오며, 참여자수를 1씩 제거, 만약 0인 경우 제거
    3. 마지막에 남은 해시값이 완주하지 못한 선수
    */
    const hash = new Map();
    for(const part of participant) {
        const prev = hash.get(part) + 1 || 1
        hash.set(part, prev)
    }
    for(const player of completion) {
        const targetNumber = hash.get(player)
        hash.set(player, targetNumber-1);
        if(targetNumber === 1) hash.delete(player)
    }
    return [...hash.entries()][0][0]
    
    return 0;
}