import React from 'react'
import './components.scss'
const Clock = () => {
    const lateDays = 42;
  return (
    <div className='dayZeroContent'>
      Do wigilii zostały: <span>{lateDays}</span> dni
    </div>
  )
}

export default Clock
