/**
 * @param  {} Fn 函数
 * @param  {} obj 上下文
 * @param  {} ...args 参数
 */
// TODO 非bind
function bind(Fn, obj, ...args) {
  if (JSON.stringify(obj) === "{}" || JSON.stringify(obj) === undefined) {
    obj = globalThis;
  }
  obj.tempFn = Fn;
  let res = obj.tempFn(...args);
  delete obj.tempFn;
  return res;
}

exports.bind = bind;
