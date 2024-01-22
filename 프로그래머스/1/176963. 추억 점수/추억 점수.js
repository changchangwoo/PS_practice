function solution(name, yearning, photo) {
    var hash = new Map()
    var answer = []
    for (let i = 0; i < name.length; i++) {
        hash.set(name[i], yearning[i])
    }
    for (let i = 0; i < photo.length; i++) {
        let score = 0

        photo[i].forEach(element => {
            if(hash.has(element)) score = score + hash.get(element)
        });
        answer.push(score)
    }

    return answer;
}

console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]))