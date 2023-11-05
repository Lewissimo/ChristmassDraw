import React, { useContext } from 'react'
import Clock from './Clock'
import YourPerson from './YourPerson'
import './components.scss'
import { StateContext } from './BoardState'

const MainBoard = () => {

  return (
    <div className='mainBoard'>
      <Clock />
      <YourPerson/>
    </div>
  )
}

export default MainBoard
