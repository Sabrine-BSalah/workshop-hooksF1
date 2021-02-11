import React from 'react'
import { Button } from 'react-bootstrap'

import useCount from '../Hooks/useCount'



const Counter = ({ firstName, lastName }) => {

  // Custom Hook
  const { count, message, setMessage, handleClickAdd, handleClickMinus } = useCount()

  return (
    <div className="counterPart">
      <hr style={{ color: "white" }} />
      <h2 className="title">{`Hello ${firstName} ${lastName}`}</h2>

      {/* counter */}
      <div>
        <Button variant="info" className="addBtn" onClick={handleClickAdd}>+</Button>
        <span className="count">{count}</span>
        <Button variant="info" className="minusBtn" onClick={handleClickMinus}>-</Button>
      </div>
      <br />

      {/* Message Part */}
      <h4 className="title">{message}</h4><br />
      <Button variant="light"
        onClick={() => setMessage(`${message} change ..`)}
        className="toggle"> Edit
      </Button>
    </div>
  )
}

export default Counter
