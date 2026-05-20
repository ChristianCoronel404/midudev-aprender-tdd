import { useState } from 'react'
import { evaluate } from 'mathjs'

export const operations = ['+', '-', '*', '/']
const equalSign = '='

export const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandleClick = (op) => () =>
    setValue((prev) => prev.concat(String(op)))

  const handleEvaluate = () => {
    try {
      const result = evaluate(value)
      setValue(String(result))
    } catch (error) {
      setValue('Error')
    }
  }

  return (
    <div>
      <h1>Calculator</h1>

      <input value={value} readOnly />

      <div role='grid'>
        {rows.map((row, idx) => (
          <div key={idx} role='row'>
            {row.map((number) => (
              <button
                key={number}
                onClick={createHandleClick(number)}
              >
                {number}
              </button>
            ))}
          </div>
        ))}

        {operations.map((operation) => (
          <button
            key={operation}
            onClick={createHandleClick(operation)}
          >
            {operation}
          </button>
        ))}

        <button onClick={handleEvaluate}>
          {equalSign}
        </button>
      </div>
    </div>
  )
}
