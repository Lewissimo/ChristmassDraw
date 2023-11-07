import React, { useContext } from 'react'
import img from '../assets/kamil.jpg'
import './components.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { StateContext } from './context/BoardState';

const YourPerson = () => {
  const state = useContext(StateContext);
  const types = state?.StatesUser;
  return (
    <div className='yourPerson' onClick={()=>{state?.userTools.set(types?.letter as string)}}>
      <div className='cardContainer'>
        <div className='card'>
          <div className='front'>
              <img src={img} alt='' />
              <span className='name'>Kamil Lewiński</span>
          </div>
          <div className='back'>
            <FontAwesomeIcon icon={faGifts} beat size="2xl" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default YourPerson
