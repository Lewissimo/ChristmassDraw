import React, { useContext } from 'react'
import Clock from './Clock'
import YourPerson from './YourPerson'
import './components.scss'
import { StateContext } from './context/BoardState'

const MainBoard = () => {

  return (
    <div className='mainBoard mainCard'>
      <Clock />
      <YourPerson/>
    </div>
  )
}

export default MainBoard
