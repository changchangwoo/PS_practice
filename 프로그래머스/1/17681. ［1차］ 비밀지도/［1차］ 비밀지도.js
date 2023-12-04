function solution(n, arr1, arr2) {
    var answer = [];
    var bin_arr1 = []
    var bin_arr2 = []
    for (let i = 0; i < arr1.length; i++) {
        bin = arr1[i].toString(2)
        while(bin.length < n) bin = '0' + bin
        bin2 = arr2[i].toString(2)
        while(bin2.length < n) bin2 = '0' + bin2
        bin_arr1.push(bin)
        bin_arr2.push(bin2)
    }
    for(let i = 0; i < bin_arr1.length; i++) {
        temp_arr = ''
        for(let j =0; j < bin_arr1[i].length; j++) {
            if(bin_arr1[i][j] === '0' && bin_arr2[i][j] === '0') temp_arr += 0
            else if (bin_arr1[i][j] === '1' || bin_arr2[i][j] === '1') temp_arr +=1
        }
        answer.push(temp_arr)
    }
    answer = answer.map(str => str.replace(/1/g, '#').replace(/0/g, ' '));
    return answer;
}