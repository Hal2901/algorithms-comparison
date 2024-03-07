const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const selectionSort = async (
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

  for (let i = 0, arrayLength = result.length; i < arrayLength; i++) {
    const minIndex = i;
    for (let j = i + 1; j < arrayLength; j++) {
      if (result[minIndex] > result[j]) {
        const temp = result[minIndex];
        result[minIndex] = result[j];
        result[j] = temp;
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
