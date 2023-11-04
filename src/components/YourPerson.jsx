import React from 'react'
import img from '../assets/kamil.jpg'
import './components.scss'
const YourPerson = () => {
  return (
    <div className='yourPerson'>
      <div className='card'>
        <div className='front'>
            <img src={img} alt='' />
            <span className='name'>Kamil Lewiński</span>
        </div>
        <div className='back'></div>
      </div>

    </div>
  )
}

export default YourPerson
