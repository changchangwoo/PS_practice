function solution(maps) {
    var answer = 0;
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    function bfs(x, y) {
        queue = []
        queue.push([x, y])
        
        while (queue.length !== 0) {
            geo = queue.shift()
            x = geo[0]
            y = geo[1]
            
            for (let i = 0; i < 4; i++) {
                nx = x + dx[i]
                ny = y + dy[i]

                if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length) continue

                if (maps[nx][ny] === 0) continue

                if (maps[nx][ny] === 1) {
                    maps[nx][ny] = maps[x][y] + 1
                    queue.push([nx, ny])
                }
            }
        }
        
        return maps[maps.length - 1][maps[0].length - 1]
    }

    answer = bfs(0, 0)

    if (answer === 1 || answer === 0 || answer === undefined) {
        answer = -1;
    }
    
    return answer;
}

console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]));
