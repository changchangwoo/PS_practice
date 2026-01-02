function solution(prices) {
    var answer = [];
    let stack = [];
    for (let i = 0; i < prices.length; i++) {
        let c = 0
        for(let j = i+1; j < prices.length; j++) {
            c++;
            if(prices[i] > prices[j]) break;
        }
        stack.push(c)
    }
    return stack;
}