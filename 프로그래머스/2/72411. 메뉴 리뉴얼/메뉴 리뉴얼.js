function solution(orders, course) {
  const hash = new Map();
  const finalAnswers = [];

  const getCombinations = (str, length) => {
    const result = [];
    const dfs = (start, path) => {
      if (path.length === length) {
        const key = path.join("");
        hash.set(key, (hash.get(key) || 0) + 1);
        return;
      }
      for (let i = start; i < str.length; i++) {
        dfs(i + 1, [...path, str[i]]);
      }
    };
    dfs(0, []);
  };

  orders.forEach((order) => {
    const sortedOrder = order.split("").sort().join("");
    course.forEach((length) => {
      if (length <= sortedOrder.length) {
        getCombinations(sortedOrder, length);
      }
    });
  });

  course.forEach((length) => {
    const candidates = [];
    hash.forEach((value, key) => {
      if (key.length === length && value >= 2) {
        candidates.push({ key, value });
      }
    });
    if (candidates.length > 0) {
      const maxValue = Math.max(...candidates.map((c) => c.value));
      candidates.forEach((candidate) => {
        if (candidate.value === maxValue) {
          finalAnswers.push(candidate.key);
        }
      });
    }
  });

  return finalAnswers.sort();
}
