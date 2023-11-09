import React, { useContext } from 'react'
import Clock from './Clock'
import YourPerson from './YourPerson'
import '../../stylesApp/components.scss'
import { StateContext } from '../../context/homeVaulesContext/BoardState'

const MainBoard = () => {

  return (
    <div className='mainBoard mainCard'>
      <Clock />
      <YourPerson/>
    </div>
  )
}

export default MainBoard
