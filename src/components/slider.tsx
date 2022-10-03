import { ChangeEvent, useCallback, useState } from 'react'

const Slider = ({min = 0, max = 256}) => {
  const [number, setNumber] = useState(0)
  const [numberEntered, setNumberEntered] = useState(false)
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value))
    setNumberEntered(true)
  }, [setNumber, setNumberEntered]);
  const isValid = !numberEntered || (number >= min && number <= max)
  return (
    <div>
      <label htmlFor="spinbutton">Slider</label>
      <input
        id="spinbutton"
        role="spinbutton"
        aria-valuenow={number}
        type="number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? null : <div role="alert">Error: Invalid number</div>}
    </div>
  )
}

export { Slider }
