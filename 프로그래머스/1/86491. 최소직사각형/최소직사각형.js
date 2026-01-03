function solution(sizes) {
    let wMax = 0;
    let hMax = 0;
    for(let i = 0; i < sizes.length; i++) {
        if(sizes[i][0] < sizes[i][1]) {
            [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]]
        }
        if(wMax < sizes[i][0]) wMax = sizes[i][0]
        if(hMax < sizes[i][1]) hMax = sizes[i][1]
    }
    return wMax * hMax;
}