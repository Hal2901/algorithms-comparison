import { useState } from 'react'
import './App.css'
import './assets/style/algo-container.scss'
import AlgoContainer from './components/AlgoContainer'

function App() {
  const [algo, setAlgo] = useState<
    | 'Unsorted' |
    'BubbleSort'
    | 'SelectionSort'
    | 'InsertionSort'
    | 'MergeSort'
    | 'QuickSort'>('SelectionSort')

  return (
    <div>
      <div>
        <button onClick={() => setAlgo('Unsorted')} >Unsorted</button>
        <button onClick={() => setAlgo('SelectionSort')} >Selection Sort</button>
        <button onClick={() => setAlgo('BubbleSort')} >Bubble Sort</button>
        <button onClick={() => setAlgo('InsertionSort')} >Insertion Sort</button>
        <button onClick={() => setAlgo('MergeSort')} >Merge Sort</button>
        <button onClick={() => setAlgo('QuickSort')} >Quick Sort</button>
      </div>
      <AlgoContainer algo={algo} />
    </div>
  )
}

export default App
