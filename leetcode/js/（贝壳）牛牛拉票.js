/*
 * @Author: Merlynr
 * @Date: 2022-09-08 09:53:59
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-09-08 10:28:55
 * @description:牛客网即将通过投票选举新一代的牛王。
 *牛牛暗地里打听到，只要他的票数不少于L，那就一定会当选。
 *于是他开始拼命的进行拉票，已知开始时他有S张票，第二天，他的票数会变为，第三天他的票数会变为，以此类推
 *现在他想知道第D天，他的票数是否不少于L票
 */
// const log = console.log.bind(console);
const log = (_) => {};
let num = Number(readline());
data = [];
while ((rl = readline())) {
  data.push(rl.split(" ").map(Number));
}
for (let i = 0; i < num; i++) {
  process(data[i][0], data[i][1], data[i][2], data[i][3]);
}
function process(L, D, S, C) {
  if (L <= S) {
    print("YES");
    return;
  }
  if (D <= 1) {
    print("NO");
    return;
  }
  process(L, D - 1, S * C + S, C);
}
