import { bubbleSort } from './bubbleSort';
import { insertionSort } from './insertionSort';
import { selectionSort } from './selectionSort';
import { mergeSort } from './mergeSort';
import { quickSort } from './quickSort';

export const unsortedArray: number[] = [];
for (let i = 0; i < 100; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  unsortedArray.push(randomNumber);
}

export const algorithmsHub = (
  algo:
    | 'Unsorted'
    | 'BubbleSort'
    | 'SelectionSort'
    | 'InsertionSort'
    | 'MergeSort'
    | 'QuickSort'
) => {
  switch (algo) {
    case 'BubbleSort':
      return bubbleSort;
    case 'SelectionSort':
      return selectionSort;
    case 'InsertionSort':
      return insertionSort;
    case 'MergeSort':
      return mergeSort;
    case 'QuickSort':
      return quickSort;
    case 'Unsorted':
      return () => {
        return { result: unsortedArray, time: 0 };
      };
  }
};
