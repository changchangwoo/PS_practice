function solution(array, commands) {
    var answer = [];
    commands.forEach(element => {
        let slice_array = array.slice(element[0]-1, element[1])
        slice_array = slice_array.sort((a,b)=>(a-b))
        answer.push(slice_array[element[2]-1])
    });
    return answer;
}