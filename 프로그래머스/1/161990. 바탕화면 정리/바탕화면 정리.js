function solution(wallpaper) {
    let x_arr = []
    let y_arr = []
    let result = []
    for(let i =0; i < wallpaper.length; i++){
        flag = false
        for(let j= 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === "#") {
                x_arr.push(j)
                flag = true
            }
        }
        if(flag === true) y_arr.push(i)
    }
    x_arr = x_arr.sort((a,b)=>a-b)
    y_arr = y_arr.sort((a,b)=>a-b)
    result.push(y_arr[0])
    result.push(x_arr[0])
    result.push(y_arr[y_arr.length-1]+1)
    result.push(x_arr[x_arr.length-1]+1)

    return result
}