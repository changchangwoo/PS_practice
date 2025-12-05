const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const T = Number(input.shift())

const dx = [-2, -1, +1, +2, +2, +1, -1, -2];
const dy = [+1, +2, +2, +1, -1, -2, -2, -1];
for (let i = 0; i < T; i++) {
    const I = Number(input.shift());
    const visited = Array.from({ length: I }, () => new Array(I).fill(false));
    const [x, y] = input.shift().split(' ').map(Number);
    const [tx, ty] = input.shift().split(' ').map(Number);


    const bfs = (x, y) => {
        const queue = [];
        let flag = 0
        queue.push([x, y, 0])
        if (x === tx && y === ty) {
            console.log(0)
            return
        }
        visited[x][y] = true
        while (queue.length > 0) {

            flag++;
            const [cx, cy, count] = queue.shift();
            for (let i = 0; i < 8; i++) {
                let nx = cx + dx[i];
                let ny = cy + dy[i];

                if (nx < 0 || nx >= I || ny < 0 || ny >= I) continue;
                if (visited[nx][ny]) continue;
                if (nx === tx && ny === ty) {
                    console.log(count + 1)
                    return
                }
                visited[nx][ny] = true
                queue.push([nx, ny, count + 1])
            }

        }
    }

    bfs(x, y)
}