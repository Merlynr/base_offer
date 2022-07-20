function smallSum(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return arr;
  }
  mergeSort(arr);
}
function mergeSort(arr) {
  let len = arr.length;
  if (len == 1) return arr;
  let middle = Math.floor(arr.length >> 1);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return mergeSort;
}
