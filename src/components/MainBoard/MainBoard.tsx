import React from 'react'
import Clock from './Clock'
import YourPerson from './YourPerson'
import '../../stylesApp/components.scss'

const MainBoard = () => {

  return (
    <div className='mainBoard mainCard'>
      <Clock />
      <YourPerson/>
    </div>
  )
}

export default React.memo(MainBoard); // React.memo do usuniecia
