function solution(answers) {
    let result = []
    let num_1 = [1, 2, 3, 4, 5]
    let num_2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let num_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    let num_count = [{ no: 1, count: 0 }, { no: 2, count: 0 }, { no: 3, count: 0 }]

    for (let i = 0; i < answers.length; i++) {
        if (num_1[i % 5] === answers[i]) num_count[0].count++
        if (num_2[i % 8] === answers[i]) num_count[1].count++
        if (num_3[i % 10] === answers[i]) num_count[2].count++
    }
    num_count = num_count.sort((a, b) => b.count - a.count)
    num_count.forEach(element => {
        if (element.count === num_count[0].count) result.push(element.no)
    });
    return result

}