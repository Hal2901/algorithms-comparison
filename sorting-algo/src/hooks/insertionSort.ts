const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const insertionSort = async (
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

  for (let i = 1, length = result.length; i < length; i++) {
    const curr = result[i];
    let j = i - 1;
    while (j >= 0 && result[j] > curr) {
      result[j + 1] = result[j];
      j--;

      await delay(1);
      if (abortSignal.aborted) {
        clearInterval(timer);
        return { time: 0 };
      }
      setArrays([...result]);
    }
    result[j + 1] = curr;
  }

  clearInterval(timer);

  return { result, time };
};
