function solution(arr) {
    let max = Math.max(...arr)
    while(true) {
        let flag = true
        for(let i = 0; i < arr.length; i++) {
            if(max % arr[i] !== 0) {
                flag = false
                break;
            }
        }
        if(flag) return max
        else max++;
    }
}
