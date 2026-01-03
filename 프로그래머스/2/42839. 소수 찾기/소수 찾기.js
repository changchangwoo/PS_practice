// 1000만까지 나오니까 이거는 에라토스테네스의 체 못쓰는거아님?

function solution(numbers) {
    var answer = 0;
    const temp_primary = [];
    
    function dfs(limit, arr, visited) {
        if(arr.length === limit) {
            temp_primary.push(+arr.join(''))
            return;
        }
        for(let i = 0; i < numbers.length; i++) {
            if(!visited[i]) { 
            visited[i] = true
            arr.push(numbers[i]);
            dfs(limit, arr, visited)
            arr.pop();
            visited[i] = false
            }
        }
        return 
    }

    for(let i = 1; i <= numbers.length; i++) {
        const arr = []
        const visited = new Array(numbers.length + 1).fill(false)
        dfs(i, arr, visited)    
    }
    for(const temp of [...new Set(temp_primary)]) {
       if(isPrime(temp)) answer++;
    }
    
    
    return answer;
}

function isPrime(num) {
    let flag = true
    if(num ===1 || num ===0) return false
    for(let i = 2 ; i < num; i++) {
        if(num % i === 0) {
            flag = false;
            break;
        }
    }
    return flag ? true : false
    
}


