const arr = [3, 9, 1, 5, 7];

function insertionSort(arr) {
  let prevIndex, current;

  for (let i = 1; i < arr.length; i++) {
    prevIndex = i - 1;
    current = arr[i];
    // 大的值右移，记录当前（小的）值位置
    while (prevIndex >= 0 && arr[prevIndex] > current) {
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex--;
    }
    // 最后把当前值左移到正确位置
    arr[prevIndex + 1] = current;
  }

  return arr;
}

console.log(insertionSort(arr));
