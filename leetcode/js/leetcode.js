const log = console.log.bind(console);
// const log = _=>{}
log("dasdas");
log("玛卡巴卡");
//快速幂 计算x^n n为整数
function qPow(x, n) {
  let result = 1;
  while (n) {
    if (n & 1) result *= x; // 同 if(n%2)
    x = x * x;
    n >>= 1; // 同 n=floor(n/2)
  }
  return result;
}

log(qPow(2, 3));
