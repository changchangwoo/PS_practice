function solution(array, commands) {
    let answer = []
    for(let i = 0; i < commands.length; i++) {
        let sliceArray = array.slice(commands[i][0]-1, commands[i][1])
        let sortArray = sliceArray.sort((a, b) => (a - b))
        answer.push(sortArray[commands[i][2]-1])
    }

    return answer
}