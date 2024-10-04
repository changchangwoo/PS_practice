function solution(sizes) {

    let answer;
    let width = [];
    let height = [];
    for(let i = 0; i < sizes.length; i++) {
        let [size_width, size_height] = sizes[i]
        width.push(size_width)
        height.push(size_width < size_height ? size_width : size_height)
    }

    widthFirst = Math.max(...width) * Math.max(...height)

    width = [];
    height = [];
    for(let i = 0; i < sizes.length; i++) {
        let [size_width, size_height] = sizes[i]
        width.push(size_width < size_height ? size_width : size_height)
        height.push(size_height)
    }

    heightFirst = Math.max(...width) * Math.max(...height)


    return widthFirst > heightFirst ? widthFirst : heightFirst
}
