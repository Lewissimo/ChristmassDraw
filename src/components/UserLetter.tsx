import React from 'react'
import User from './User'
import img from '../assets/kamil.jpg'
import './components.scss'
const UserLetter = () => {
    const letterContent = 
`Drogi święty Mikołaju!

W tym roku chciałbym dostać:

chleb
masło
kubek`
  return (
    <div className='userLetter show'>
        <div className='signUserWrapper'>
            <img src={img} alt='' />   
            <span>Kamil Lewiński</span>
        </div>
        <div className='letterContent'>
            <pre>{letterContent}</pre>
        </div>
    </div>
  )
}

export default UserLetter