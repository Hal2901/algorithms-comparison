import { memo, useEffect, useState } from "react"
import { unsortedArray, algorithmsHub } from "../hooks"


const AlgoContainer = memo(({ algo }: {
  algo:
  'Unsorted'
  | 'BubbleSort'
  | 'SelectionSort'
  | 'InsertionSort'
  | 'MergeSort'
  | 'QuickSort'; unsorted?: boolean
}) => {
  const [arrays, setArrays] = useState(unsortedArray)
  const algorithm = algorithmsHub(algo)

  useEffect(() => {
    setArrays(algorithm(arrays))
  }, [algo, algorithm])

  return (
    <div>
      <div className="algo-container">
        {unsortedArray.map((number, index) => {
          return (
            <div className={`algo-container-bar algo-container-bar-${number}`} key={index}>
            </div>
          )
        })}
      </div>
      <div className="algo-container">
        {arrays.map((number, index) => {
          return (
            <div className={`algo-container-bar algo-container-bar-${number}`} key={index}>
            </div>
          )
        })}
      </div>
    </div>
  )
})

export default AlgoContainer