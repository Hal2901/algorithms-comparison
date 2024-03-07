const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mergeSort = async (
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

  const start = 0;
  const end = result.length - 1;

  await sort(result, start, end, setArrays, abortSignal);

  if (abortSignal.aborted) {
    clearInterval(timer);
    return { time: 0 };
  }

  clearInterval(timer);

  return { result, time };
};

async function sort(
  arr: number[],
  start: number,
  end: number,
  setArrays: (array: number[]) => void,
  abortSignal: AbortSignal
) {
  if (abortSignal.aborted) return;

  if (start >= end) {
    return;
  }

  const middle = Math.floor((start + end) / 2);

  await sort(arr, start, middle, setArrays, abortSignal);
  await sort(arr, middle + 1, end, setArrays, abortSignal);

  await merge(arr, start, middle, end, setArrays, abortSignal);
}

async function merge(
  arr: number[],
  start: number,
  middle: number,
  end: number,
  setArrays: (array: number[]) => void,
  abortSignal: AbortSignal
) {
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

    await delay(0.01);
    if (abortSignal.aborted) {
      return;
    }
    setArrays([...arr]);
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;

    await delay(0.01);
    if (abortSignal.aborted) {
      return;
    }
    setArrays([...arr]);
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;

    await delay(0.01);
    if (abortSignal.aborted) {
      return;
    }
    setArrays([...arr]);
  }
}
