const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number)

const stack = []
let answer = 0 
arr.forEach((item, idx) => {
    if(!stack.includes(item)) {
        if(stack.length === N) {
            let remove_idx = 0
            let max_count = 0;
            stack.forEach((stack_item, in_idx) => {
            let count = 0; 
            for(let i = idx; i < M; i++) {
                if(arr[i] === stack_item) break;
                count++;
            }  
            if(max_count < count) {
                max_count = count
                remove_idx = in_idx
            }
            });
            stack[remove_idx] = item
            answer++;
        } else {
        stack.push(item)
        }
    }

});

console.log(answer)