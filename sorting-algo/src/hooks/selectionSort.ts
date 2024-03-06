export const selectionSort = (array: number[]) => {
  const result = [...array];
  for (let i = 0, arrayLength = result.length; i < arrayLength; i++) {
    const minIndex = i;
    for (let j = i + 1; j < arrayLength; j++) {
      if (result[minIndex] > result[j]) {
        const temp = result[minIndex];
        result[minIndex] = result[j];
        result[j] = temp;
      }
    }
  }
  return result;
};
