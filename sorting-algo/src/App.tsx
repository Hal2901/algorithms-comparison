import { useState } from 'react'
import './App.css'
import './assets/style/algo-container.scss'
import AlgoContainer from './components/AlgoContainer'
import { unsortedArray } from './hooks'

function App() {
  const [isSorting, setIsSorting] = useState(false)

  return (
    <div>
      <div>
        <button onClick={() => setIsSorting(false)} >Reset</button>
        <button onClick={() => setIsSorting(true)} >Sort</button>
      </div>
      <AlgoContainer unsortedArray={unsortedArray} algoName={'Unsorted'} />
      <div>
        <AlgoContainer isSorting={isSorting} unsortedArray={unsortedArray} algoName={'SelectionSort'} />
        <AlgoContainer isSorting={isSorting} unsortedArray={unsortedArray} algoName={'BubbleSort'} />
        <AlgoContainer isSorting={isSorting} unsortedArray={unsortedArray} algoName={'InsertionSort'} />
        <AlgoContainer isSorting={isSorting} unsortedArray={unsortedArray} algoName={'MergeSort'} />
        <AlgoContainer isSorting={isSorting} unsortedArray={unsortedArray} algoName={'QuickSort'} />
      </div>
    </div>
  )
}

export default App
