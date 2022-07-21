function smallSum(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return arr;
  }
  return mergeSort(arr, 0, arr.length - 1);
}
function mergeSort(arr, left, right) {
  if (left == right) {
    return 0;
  }
  let middle = left + ((right - 1) >> 1);
  return (
    mergeSort(arr, 1, middle) +
    mergeSort(arr, middle + 1, right) +
    merge(arr, 1, middle, right)
  );
}

function merge(arr, l, m, r) {
  let tempArr = new Array(r - l + 1);
  let i = 0,
    p1 = 1,
    p2 = m + 1,
    res = 0;
  while (p1 <= m && p2 <= r) {
    res += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0;
    tempArr[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= m) {
    tempArr[i++] = arr[p1++];
  }
  while (p2 <= r) {
    tempArr[i++] = arr[p2++];
  }
  for (i = 0; i < tempArr.length; i++) {
    arr[l + i] = tempArr[i];
  }
  return res;
}

console.log(
  "🚀 ~ file: smallSum.js ~ line 2 ~ smallSum ~ smallSum",
  smallSum([1, 3, 4, 2, 5])
);
