import React from 'react'
import './components.scss'
const Clock = () => {
    const lateDays = 42;
  return (
    <div className='dayZeroContent'>
      <span>Dni do wigilii</span>
      <span>{lateDays}</span>
    </div>
  )
}

export default Clock
