function solution(user_id, banned_id) {
  const visited = new Array(user_id.length + 1).fill(false);
  const selected = [];
  const arr = [];
  const dfs = () => {
    if (arr.length === banned_id.length) {
      let flag = true;
      for (let i = 0; i < banned_id.length; i++) {
        if (arr[i].length === banned_id[i].length) {
            for (let j = 0; j < arr[i].length; j++) {
                if(banned_id[i][j] === "*") continue
                if(arr[i][j] !== banned_id[i][j]) {
                    flag = false
                    break;
                }
            }
        } else {
          flag = false;
          break;
        }
      }
      if (flag) selected.push([...arr].sort());

      return;
    }
    for (let i = 0; i < user_id.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        arr.push(user_id[i]);
        dfs();
        arr.pop();
        visited[i] = false;
      }
    }
  };
  dfs();
  const joinSelected =  selected.map((item) => item.join(''))
  const setSelected = new Set(joinSelected)
  const answer = setSelected.size
  return answer
}