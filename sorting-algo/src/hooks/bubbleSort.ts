const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const bubbleSort = async (
  array: number[],
  setArrays: (array: number[]) => void,
  abortSignal: AbortSignal
) => {
  const result = [...array];
  const length = result.length;

  let time = 0;
  const timer = setInterval(() => {
    time += 10;
    if (abortSignal.aborted) {
      clearInterval(timer);
      return { time: 0 };
    }
  }, 10);

  for (let i = 0; i < length; ++i) {
    for (let j = 0; j < length - 1 - i; ++j) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }

      await delay(1);
      if (abortSignal.aborted) {
        clearInterval(timer);
        return { time: 0 };
      }
      setArrays([...result]);
    }
  }

  clearInterval(timer);
  return { result, time };
};
