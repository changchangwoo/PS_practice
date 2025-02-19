function solution(record) {
  var answer = [];
  const log = [];
  const hash = new Map();
  record.forEach((element) => {
    element = element.split(" ");
    let action = element[0];
    let uid = element[1];
    if (action === "Leave") {
      log.push([uid, action]);
    } else if (action === "Enter") {
      let nickname = element[2];
      if (hash.get(uid) !== nickname) {
        hash.set(uid, nickname);
      }
      if (!hash.get(uid)) {
        hash.set(uid, nickname);
      }
      log.push([uid, action]);
    } else if (action === "Change") {
      let nickname = element[2];
      hash.set(uid, nickname);
    }
  });
  log.forEach((element) => {
    let [uid, action] = element;
    answer.push(
      `${hash.get(uid)}님이 ${
        action === "Enter" ? "들어왔습니다." : "나갔습니다."
      }`
    );
  });
  return answer;
}