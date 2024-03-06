export const insertionSort = (array: number[]) => {
  const result = [...array];

  for (let i = 1, length = result.length; i < length; i++) {
    const curr = result[i];
    let j = i - 1;
    while (j >= 0 && result[j] > curr) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = curr;
  }

  return result;
};
