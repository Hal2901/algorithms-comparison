export const quickSort = (array: number[]) => {
  const result = [...array];

  qs(result, 0, result.length - 1);
  return array;
};

function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }
  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  console.log(arr);
  qs(arr, pivotIdx + 1, hi);
  console.log(arr);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let idx = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++;
      const temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;
  return idx;
}
