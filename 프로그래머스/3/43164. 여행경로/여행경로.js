function solution(tickets) {
    result = []
    tickets = tickets.sort()
    visited = new Array(tickets.length).fill(false)
    function dfs(str, count) {
        result.push(str)
        if(count === tickets.length) {
            answer = result
            return true
        }
        for(let i = 0; i <tickets.length; i++){
            if(!visited[i] && tickets[i][0] === str) {
                visited[i] = true
                if(dfs(tickets[i][1], count+1)) return true
                visited[i] = false
            }
        }
        result.pop()
        return false

    }
    dfs('ICN', 0)
    return answer
}
