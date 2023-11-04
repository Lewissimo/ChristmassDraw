import React from 'react'
import Clock from './Clock'
import YourPerson from './YourPerson'
import './components.scss'

const MainBoard = () => {
  return (
    <div className='mainBoard'>
      <Clock />
      <YourPerson />
    </div>
  )
}

export default MainBoard
