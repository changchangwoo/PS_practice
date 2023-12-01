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