/**
 * @param  {} Fn 执行函数
 * @param  {} obj 绑定对象
 * @param  {} ...args 参数
 */
function call(Fn, obj, ...args) {
  if (JSON.stringify(obj) === "{}" || JSON.stringify(obj) === undefined) {
    // 全局对象
    obj = globalThis;
  }
  //   为对象添加方法,注意方法名不要覆写了
  obj.func = Fn;
  // 执行obj中的方法
  let res = obj.func(...args);
  //   删除方法
  delete obj.temp;
  return res;
}

exports.call = call;
