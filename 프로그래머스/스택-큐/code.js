function solution(bridge_length, weight, truck_weights) {
    bridge = []
    data = []
    end_point = truck_weights.length
    let count = 0
    bridge.length = bridge_length
    bridge.fill(0)
    while (true) {
        count += 1
        let rest = bridge.shift()
        if(rest != 0) { data.push(rest) }
        current_weight = sum(bridge)
        if(current_weight + truck_weights[0] <= weight) {
            bridge.push(truck_weights.shift())
        } else {
            bridge.push(0)
        }
        if(data.length === end_point){
            break
        }
    }
    return count
}

function sum(bridge) {
    let sumVal = 0
    bridge.forEach(element => {
        sumVal = element+sumVal
    });
    return sumVal
}

// 트럭은 1초당 bridge_length의 1 만큼 움직임 => 최대 bridege만큼 올라감
// 무게는 최대 weight만큼
// 대기트럭은 truck_weights배열
// 다리를 건너는 트럭 내 합이 weight보다 작아야함
// 다리는 반드시 2초만큼 걸림 변수 내 객체 count를 만들고 그 객체가 brideg_length가 되면 나가게?
// 전체 카운트도 만들어서??
// 그러면 다리를 지나는 트럭은 while문으로 넣는다?



console.log(solution(2, 10, [7, 4, 5, 6]))