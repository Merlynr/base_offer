/**
 * @description:防抖，最后一个动作结束后执行一次
 * @param  {} fn
 * @param  {} wait
 */
function debounce(fn, wait) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, wait);
  };
}
