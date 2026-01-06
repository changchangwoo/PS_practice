/*
항상 ICN 출발, 주어진 항공권을 모두 사용해야한다.
*/
function solution(tickets) {
    var answer = ["ICN"];
    const hash = new Map();
    for(const [start, end] of tickets) {
        if(hash.has(start)) {
            let arr = hash.get(start)
            arr.push(end)
            hash.set(start, arr.sort())
        } else {
            hash.set(start, [end])
        }
    }
    const visited = new Map();
    for(const [key, value] of hash) {
        visited.set(key, new Array(value.length).fill(false))
    }
    
    let found = false
    let result = []
    const dfs = (s) => {
        if(found) return
        if(answer.length === tickets.length +1) {
            result = [...answer]
            found = true
            return
        }
        if(!hash.has(s)) return
        const arr = hash.get(s);
        
        for(let i = 0; i < arr.length; i++) {
            let visitedTicket = visited.get(s)
            if(!visitedTicket[i]) {
                visitedTicket[i] = true
                answer.push(arr[i])
                dfs(arr[i])
                answer.pop()
                visitedTicket[i] = false

            }
        }
    }
    dfs("ICN")
    
    return result;
}