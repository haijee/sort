const arr = [3, 9, 1, 5, 7];

function selectionSort(arr) {
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [ arr[i], arr[minIndex]];
  }
  return arr
}

console.log(selectionSort(arr));
