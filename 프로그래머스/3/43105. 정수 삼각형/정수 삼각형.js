/*
맨 좌측 = DP[i-1][0] + DP[i][0]
맨 우측 = DP[i-1][LEN-1] + DP[i][LEN]
나머지 = Math.max(DP[i-1][LEN-1], DP[i-1][LEN])
*/
function solution(triangle) {
    triangle.forEach((arr, idx) => {
        if(idx < 1) return
        let len = arr.length
        for(let i = 0; i < len; i++) {
            if(i === 0) triangle[idx][0] = triangle[idx][0] + triangle[idx-1][0]
            else if(i === len-1) triangle[idx][len-1] = triangle[idx][len-1] + triangle[idx-1][len-2]
            else triangle[idx][i] = Math.max(triangle[idx-1][i-1], triangle[idx-1][i]) + triangle[idx][i]
        }
    });
    return Math.max(...triangle[triangle.length-1]);
}