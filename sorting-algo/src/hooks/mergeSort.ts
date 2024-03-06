export const mergeSort = (array: number[]) => {
  const result = [...array];

  sort(result);
  return result;
};

function sort(arr: number[], start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }

  const middle = Math.floor((start + end) / 2);

  sort(arr, start, middle);
  sort(arr, middle + 1, end);

  merge(arr, start, middle, end);
}

function merge(arr: number[], start: number, middle: number, end: number) {
  const left = arr.slice(start, middle + 1);
  const right = arr.slice(middle + 1, end + 1);

  let i = 0,
    j = 0,
    k = start;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }

    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}
