function zhipai(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const bf = (array, L, R) => {
    if (L == R) {
      return arr[L];
    }
    let p1 = arr[L] + en(array, L + 1, R);
    let p2 = arr[R] + en(array, L, R - 1);
    return Math.max(p1, p2);
  };
  const en = (array, L, R) => {
    if (L == R) {
      return 0;
    }
    // 对手拿走L位置的数
    let p1 = bf(arr, L + 1, R);
    // 对手拿走R位置的数
    let p2 = bf(arr, L, R - 1);
    return Math.min(p1, p2);
  };
  let before = bf(arr, 0, arr.length - 1);
  let end = en(arr, 0, arr.length - 1);
  return Math.max(before, end);
}
function dpzhipai(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let len = arr.length,
    fDP = new Array([], []),
    eDP = new Array([], []);
  for (let i = 0; i < len; i++) {
    fDP[i][i] = arr[i];
  }
  for (let startColumn = 1; startColumn < N; startColumn++) {
    // 行
    let L = 0;
    // 列
    let R = startColumn;
    while (R < N) {
      fDP[L][R] = Math.max(arr[L] + eDP[L + 1][R], arr[R] + eDP[L][R - 1]);
      eDP[L][R] = Math.min(fDP[L + 1][R], fDP[L][R - 1]);
      L++;
      R++;
    }
  }
  return Math.max(fDP[0][N - 1], eDP[0][N - 1]);
}

console.log(zhipai([7, 4, 16, 15, 1]));
