function solution(board, moves) {
    var answer = 0;
    let boardLen = board.length;
    let moveLen = moves.length;
    const arr = [];
    for(let i = 0; i < moveLen ; i++) {
        let curIdx = moves[i] - 1;
        for(let j = 0; j < boardLen; j++) {
            
            if(board[j][curIdx] === 0) continue;
            else {
                let pickItem = board[j][curIdx]
                board[j][curIdx] = 0

                let topItem = arr[arr.length-1]
                if(arr.length === 0 ) {
                    arr.push(pickItem)
                    break;
                }
                
                if(topItem === pickItem) {
                    answer += 2;
                    arr.pop();
                    break;
                } else {
                    arr.push(pickItem)
                    break;
                }

                
            }
        }
    }

    return answer;
}
