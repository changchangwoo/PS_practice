function solution(brown, yellow) {
    let heigth = 3
    let sum = brown+yellow
    let width = 0
    while(true) {
        if(sum % heigth === 0) {
            width = sum / heigth
            if((width-2) * (heigth-2) === yellow) {
                break
            }
        }
        heigth++;
    }
    return [width,heigth]
}