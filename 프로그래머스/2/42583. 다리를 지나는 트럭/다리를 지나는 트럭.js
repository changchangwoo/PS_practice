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
