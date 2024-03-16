let [N, M] = require('fs').readFileSync("input.txt").toString().trim().split(' ').map(Number);
let result = [];
let answer = [];
let visited = Array(N + 1).fill(false);

function recursion(num) {
    if (result.length === M) {
        answer.push([...result]);
        return;
    }
    for (let i = 1; i <= N; i++) {
        if (visited[i] === false) {
            visited[i] = true;
            result.push(i);
            recursion(num + 1);
            visited[i] = false;
            result.pop();
        }
    }
}

recursion(1);

answer.forEach(permutation => {
    console.log(permutation.join(' '));
});
