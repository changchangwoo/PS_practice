/*
순위를 반환하는것이 아닌 순위를 매길 수 있는 선수의 수를 반환
승패 여부는 중요하지 않음.
순위를 매길 수 있는 조건 => 승리한 사람+패배한 사람 수가 n-1이 되면 됨
*/
function solution(n, results) {
    var answer = 0;
    const graph = Array.from({length : n+1}, () => new Array(n+1).fill(false))
    for(let i = 1; i <=n ; i++) graph[i][i] = true;
    for(const [s,v] of results) {
        graph[s][v] = true
    }
    for(let k = 1; k <= n; k++) {
        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= n; j++) {
                if(graph[i][k] && graph[k][j]) graph[i][j] = true
            }
        }
    }
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for(let j = 1; j <=n ; j++) {
            if(i !== j && (graph[i][j] || graph[j][i])) count++;
        }
        if(count === n-1) answer++;
    }
    return answer;
    
}