const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const quickSort = async (
  array: number[],
  setArrays: (array: number[]) => void,
  abortSignal: AbortSignal
) => {
  const result = [...array];

  let time = 0;
  const timer = setInterval(() => {
    time += 10;
    if (abortSignal.aborted) {
      clearInterval(timer);
      return { time: 0 };
    }
  }, 10);

  await qs(result, 0, result.length - 1, setArrays, abortSignal);

  if (abortSignal.aborted) {
    clearInterval(timer);
    return { time: 0 };
  }

  clearInterval(timer);

  return { result, time };
};

async function qs(
  arr: number[],
  lo: number,
  hi: number,
  setArrays: (array: number[]) => void,
  abortSignal: AbortSignal
): Promise<void> {
  if (abortSignal.aborted) return;

  if (lo >= hi) {
    return;
  }
  const pivotIdx = await partition(arr, lo, hi, setArrays, abortSignal);

  await qs(arr, lo, pivotIdx - 1, setArrays, abortSignal);
  await qs(arr, pivotIdx + 1, hi, setArrays, abortSignal);
}

async function partition(
  arr: number[],
  lo: number,
  hi: number,
  setArrays: (array: number[]) => void,
  abortSignal: AbortSignal
): Promise<number> {
  const pivot = arr[hi];

  let idx = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++;
      const temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;

      await delay(1);
      if (abortSignal.aborted) return idx;
      setArrays([...arr]);
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;
  return idx;
}
