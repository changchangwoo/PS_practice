function solution(users, emoticons) {
    const discount = [10, 20, 30, 40]
    const discountRatioArr = []
    const answer = []

    const arr = []
    const dfs = () => {
        if (arr.length === emoticons.length) {
            discountRatioArr.push([...arr])
            return
        }
        for (let i = 0; i < discount.length; i++) {
            arr.push(discount[i])
            dfs()
            arr.pop();
        }
    }
    dfs();

    discountRatioArr.forEach((arr) => {
        let totalSum = 0
        let emoticonPlus = 0
        users.forEach((user, idx) => {
            let userSum = 0
            let isEmoticonPlus = false
            const [limitRatio, limit] = user
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] >= limitRatio) {
                    price = emoticons[i] - (emoticons[i] * (arr[i] / 100))
                    userSum += price
                }
                if (userSum >= limit) {
                    emoticonPlus++;
                    isEmoticonPlus = true
                    break;
                }
            }
            if (!isEmoticonPlus) totalSum += userSum
        })
        answer.push([emoticonPlus, totalSum])
    })
    let result = answer.sort((a, b) => {
        if (b[0] !== a[0]) {
            return b[0] - a[0];
        } else {
            return b[1] - a[1];
        }
    });
    return result[0]
}