/*
장르별로 가장 많이 재생된 노래를 두 개씩 모아 배스트 앨범
1. 속한 노래가 많이 재생된 장르 수록
2. 장르 내에서 많이 재생된 노래 수록
3. 장르 내에서 재생힛수가 같은 경우, 고유 번호 낮은 노래 수록
*/
function solution(genres, plays) {
    var answer = [];
    const hash = new Map();
    for(let i = 0; i < plays.length; i++) {
        if(!hash.has(genres[i])) {
            hash.set(genres[i], [{id : i, plays : plays[i]}])
        } else {
            hash.set(genres[i], [...hash.get(genres[i]), {id : i, plays : plays[i]}])
        }
    }
    const arr = []
    for(const [key, value] of hash) {
        let count = 0;
        for(d of hash.get(key)) {
            count += d.plays;
        }
        arr.push({genre : key, total : count})
    }
    const sorted_arr = arr.sort((a, b) => b.total - a.total)
    for(const item of sorted_arr) {
        const inArr = hash.get(item.genre).sort((a, b) => {
            if(a.plays === b.plays) return a.id - b.id
            return b.plays - a.plays
        })
        inArr.slice(0, 2).forEach((v) => answer.push(v.id))
    }
    return answer;
}