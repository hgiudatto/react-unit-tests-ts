const quickSort = (arr: Array<number>): Array<number> => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < pivot) {
      left.push(arr[index]);
    } else {
      right.push(arr[index]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([5, 2, 9, 3, 6, 1, 8, 7]));
