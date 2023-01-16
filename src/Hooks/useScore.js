import { useCallback, useEffect, useState } from "react"

const useScore = (clearedRow) => {

  console.log("usescprecleared", clearedRow)

  const [score, setScore] = useState(0)
  const [Level, setLevel] = useState(0)
  const [rows, setRows] = useState(0)

  const calculateScore = useCallback(function () {
    const linePoint = [40, 100, 300, 1200]

    if (clearedRow > 0) {
      console.log("clear", clearedRow);
      setScore(prev => prev + linePoint[(clearedRow > 4 ? 4 : clearedRow) - 1] * (Level + 1))
      setRows(prev => prev + clearedRow)
    }

  }, [Level, clearedRow])

  useEffect(() => {
    calculateScore()
  }, [calculateScore, clearedRow, score])

  return { score, setScore, Level, rows, setLevel, setRows }

}

export default useScore
