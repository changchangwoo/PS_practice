// hash 정석으로 열심히 풀려고했는데 결국 map으로 풀었음
// 나중에 시간나면 동일한 로직을 hash로 풀 수 있도록 하고싶음

function solution(participant, completion) {
    let answer
    let hash = new Map()
    participant.forEach(element => {
        if (hash.get(element) === undefined) {
            hash.set(element, 0)
        }
        else hash.set(element, hash.get(element)+1)
    });

    completion.forEach(element => {
        if(hash.get(element) != 0) hash.set(element, hash.get(element)-1)
        else if (hash.get(element) === 0) hash.delete(element)
    });

    for(let [key, value] of hash) {
        answer = key
    }

    return answer
}

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))