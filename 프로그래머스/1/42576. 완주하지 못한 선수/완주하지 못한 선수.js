function solution(participant, completion) {
    const hash = new Map();
    const answer = []
    for(let name of participant) {
        hash.set(name, hash.get(name) ? hash.get(name) + 1 : 1)
    }
    for(let name of completion) {
        hash.set(name, hash.get(name) ? hash.get(name) - 1 : 0)
    }
    for(const [key, value] of hash.entries()) {
        if(value > 0) return key
    }
    
}