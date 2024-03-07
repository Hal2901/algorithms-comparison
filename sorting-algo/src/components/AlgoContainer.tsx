import { memo, useEffect, useState } from "react"
import { algorithmsHub } from "../hooks"


const AlgoContainer = memo(({ algoName, unsortedArray, isSorting = false }: {
  algoName:
  'Unsorted'
  | 'BubbleSort'
  | 'SelectionSort'
  | 'InsertionSort'
  | 'MergeSort'
  | 'QuickSort',
  unsortedArray: number[],
  isSorting?: boolean
}) => {
  const [arrays, setArrays] = useState(unsortedArray)
  const [time, setTime] = useState(0)
  const algorithm = algorithmsHub(algoName)

  useEffect(() => {
    const abortController = new AbortController()

    const sortArray = async () => {
      const { time } = await algorithm(unsortedArray, setArrays, abortController.signal)
      // setArrays([...result])
      setTime(time)
    }

    if (isSorting) {
      sortArray()
    }

    if (!isSorting) {
      abortController.abort()
      setTime(0)
      setArrays(unsortedArray)
    }

    return () => {
      abortController.abort()
    }
  }, [algorithm, unsortedArray, isSorting])

  return (
    <div>
      <div>
        {algoName}
      </div>
      <div className="algo-container">
        {arrays.map((number, index) => {
          return (
            <div className={`algo-container-bar algo-container-bar-${number}`} key={index}>
            </div>
          )
        })}
      </div>
      <div>
        {`${time}s`}
      </div>
    </div>
  )
})

export default AlgoContainer