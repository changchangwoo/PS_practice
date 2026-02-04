/*
바로 앞 번호 학생이나, 뒷 번호 학생에게만 체육복을 빌려줄 수 있다.
학생 수 30명 이하 시간복잡도 X
여벌 체육복을 가져온 학생이 체육복을 도난 당한 경우 제외

1, 2, 4

2, 3, 4, 5



*/
function solution(n, lost, reserve) {

    const newLost = lost.filter((v) => !reserve.includes(v)).sort((a, b) => a - b)
    const newReserve = reserve.filter((v) => !lost.includes(v)).sort((a, b) => a - b)
    var answer = 0;
    const hash = new Map();
    newLost.forEach((v) => hash.set(v, true))
    for(const item of newReserve) {
        if(hash.get(item)) continue;
        if(hash.get(item-1)) {
            hash.delete(item-1)
            continue;
        }
        if(hash.get(item+1)) {
            hash.delete(item+1)
            continue;
        }
    }
    return n - [...hash.entries()].length
    
    return answer;
}