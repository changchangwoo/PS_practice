
function solution(rectangle, characterX, characterY, itemX, itemY) {
    const SIZE = 51
    const graph = Array.from({length : SIZE * 2}, () => new Array(SIZE * 2).fill(0))
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    const visited = Array.from({length : SIZE * 2}, () => new Array(SIZE * 2).fill(false))

    let rectangleArr = rectangle.map((item) => item.map((v) => v *2))
    for(const [x1, y1, x2, y2] of rectangleArr) {
        for(let i = x1; i <= x2; i++) {
            for(let j = y1; j <= y2; j++) {
                graph[i][j] = 1
            }
        }
    }
    for(const [x1, y1, x2, y2] of rectangleArr) {
        for(let i = x1+1; i <= x2-1; i++) {
            for(let j = y1+1; j <= y2-1; j++) {
                graph[i][j] = 0
            }
        }
    }
    const bfs = (startX, startY) => {
        const queue = [];
        queue.push([startX, startY])
        visited[startX][startY] = true;
        while(queue.length > 0) {
            let [cx, cy] = queue.shift();
            for(let i = 0; i < 4; i++) {
                let nx = cx + dx[i]
                let ny = cy + dy[i]
                if(nx < 0 || nx >= SIZE * 2 || ny < 0 || ny >= SIZE * 2) continue;
                if(visited[nx][ny]) continue;
                if(graph[nx][ny] === 0) continue;
                queue.push([nx, ny])
                visited[nx][ny] = true;
                graph[nx][ny] = graph[cx][cy] + 1
            }
        }
    }
    bfs(characterX * 2, characterY * 2)
    
    return Math.floor(graph[itemX * 2][itemY * 2] / 2);
}