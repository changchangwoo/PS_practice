const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const graph = [];
const dp = new Array(101).fill(Infinity);
for (let i = 1; i <= 100; i++) {
    graph[i] = i;
}

const starts = [];
const ends = [];
input.map((item) => {
    let [start, end] = item.split(' ').map(Number);
    starts.push(start);
    ends.push(end);
    graph[start] = end;
});

const bfs = () => {
    const queue = [];
    queue.push([1, 0]);
    dp[1] = 0;

    while (queue.length > 0) {
        let [current, diceCount] = queue.shift();


        for (let i = 1; i <= 6; i++) {
            let next = current + i;
            if (next > 100) continue;


            let destination = graph[next];


            if (dp[destination] > diceCount + 1) {
                dp[destination] = diceCount + 1;
                queue.push([destination, diceCount + 1]);
            }
        }
    }
};

bfs();

console.log(dp[100]); 