function solution(s){
    const arr = []
    for(let item of s) {
        if(item === "(")
        {
            arr.push(0)
        }
        else if(item === ")")
    {
    if(arr.length > 0) {
    arr.pop()
    } else {
        return false
    }
    }
    }
    if(arr.length === 0) return true
    else return false
}