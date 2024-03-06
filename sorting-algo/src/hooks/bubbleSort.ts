export const bubbleSort = (array: number[]) => {
  const result = [...array];
  console.log(result);
  for (let i = 0; result.length; ++i) {
    for (let j = 0; j < result.length - 1 - i; ++j) {
      if (result[i] > result[i + 1]) {
        const tmp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = tmp;
      }
    }
  }
  console.log(result);
  return result;
};
