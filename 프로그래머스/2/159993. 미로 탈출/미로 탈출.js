/*
레버를 찍고 다시 돌아가는 경우를 고려
첫번째 BFS는 레버를 목적지로, 이후 레버부터 다시 출구를 목적지로 두번 돌리기?
*/
function solution(maps) {
    let lenX = maps.length;
    let lenY = maps[0].length;
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    let start, lever, end
    let leverCheck = false
    let visited = Array.from({length: lenX}, () => new Array(lenY).fill(false));
    let countRoute = Array.from({length: lenX}, () => new Array(lenY).fill(0));
    for(let i = 0; i < lenX; i++) {
        for(let j = 0; j < lenY; j++) {
            if(maps[i][j] === "S") {
                start = [i,j]
            } 
            if(maps[i][j] === "L") {
                lever = [i,j]
            }
            if(maps[i][j] === "E") {
                end = [i,j]
            }
        }
    }
    
    function bfs(set, end) {
        let [sx,sy] = set
        let [ex, ey] = end
        const queue = []
        visited[sx][sy] = true
        queue.push([sx,sy])
        while(queue.length > 0) {
            let [px, py] = queue.shift();
            if(px === ex && py === ey) {
                if(!leverCheck) leverCheck = true
                return
            }
            for(let i = 0; i < 4; i++) {
                nx = px + dx[i]
                ny = py + dy[i]
                if(nx < 0 || nx >= lenX || ny < 0 || ny >= lenY) continue;
                if(visited[nx][ny] === true) continue;
                if(maps[nx][ny] === "X") continue;
                queue.push([nx, ny])
                countRoute[nx][ny] = countRoute[px][py]+1
                visited[nx][ny] = true
            }
            }
    }
    bfs(start, lever)
    if(!leverCheck) return -1
    visited = Array.from({length: lenX}, () => new Array(lenY).fill(false));
    bfs(lever, end)



    return countRoute[end[0]][end[1]] === 0 ? -1 : countRoute[end[0]][end[1]];
}