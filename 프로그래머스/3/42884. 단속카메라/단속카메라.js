/*
모든 차량이 한 번은 단속용 카메라를 만나야하는 경우 최소 몇 대를 설치해야하는지
다음에 오는 값의 시작 지점이 앞 선 끝나는 지점보다 더 낮은 경우, 그 지점의 끝나는 부분부터 새로 설치
*/
function solution(routes) {
    var answer = 1;
    const sortedRoutes = routes.sort((a, b) => a[1] - b[1]);
    let camera = sortedRoutes[0][1]
    for(let i = 1; i < sortedRoutes.length; i++) {
        const [start, end] = sortedRoutes[i]
        if(start > camera) {
            console.log(start, camera)
            answer++;
            camera = end
        }
    }
    return answer;
}