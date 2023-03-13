const arr = [3, 9, 1, 5, 7];

function quickSort(arr, left, right) {
  let len = arr.length;
  let partitionIndex;
  left = typeof left != "number" ? 0 : left;
  right = typeof right != "number" ? len - 1 : right;
  if (left < right) {
    partitionIndex = partition(arr, left, right); //分区
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}

function partition(arr, left, right) {
  let pivot = left;
  let index = pivot + 1;

  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];

  return index - 1;
}

console.log(quickSort(arr));
