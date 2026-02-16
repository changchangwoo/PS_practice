/*
사각형의 길이를 늘린다는 개념이 아님, 해상도를 늘린다는 개념으로 접근
그렇기에 초기값도 두배로 늘리는것이 맞음. 그리고 거기에서 모서리를 추출하는 느낌으로 접근
현재와 같은 형태는 커브를 했을떄의 이동 값을 계산하지 못함, 픽셀 단위이기 떄문
*/

function solution(rectangle, characterX, characterY, itemX, itemY) {
    const size = 51 * 2
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    const graph = Array.from({length : size}, () => new Array(size).fill(0))
    const visited = Array.from({length : size}, () => new Array(size).fill(false))
    for(const [x1, y1, x2, y2] of rectangle) {
        for(let i = y1 * 2; i <= y2 * 2; i++) {
            for(let j = x1 * 2; j <= x2 * 2; j++) {
                graph[i][j] = 1
            }
        }
    }
    
    for(const [x1, y1, x2, y2] of rectangle) {
        for(let i = y1 * 2 + 1; i <= y2 * 2 - 1 ; i++) {
            for(let j = x1 * 2 + 1; j <= x2 * 2 - 1; j++) {
                graph[i][j] = 0
            }
        }
    }
    
    function bfs(x, y) {
        const queue = []
        queue.push([x, y])
        visited[x][y] = true
        while(queue.length > 0) {
            const [cx, cy] = queue.shift();
            for(let i = 0; i < 4; i++) {
                const nx = cx + dx[i]
                const ny = cy + dy[i]
                if(nx < 0 || nx >= size || ny < 0 || ny >= size) continue;
                if(graph[nx][ny] === 0) continue;
                if(visited[nx][ny]) continue;
                visited[nx][ny] = true;
                graph[nx][ny] = graph[cx][cy] + 1
                queue.push([nx, ny])
            }
        }
    }
    bfs(characterY * 2, characterX * 2)
    return Math.floor(graph[itemY * 2][itemX * 2] / 2)
}