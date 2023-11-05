import React, { useContext } from 'react'
import './components.scss'
import img from '../assets/kamil.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { StateContext } from './BoardState';


const User = () => {
  const state = useContext(StateContext);
  const type = state.statesUser;
  return (
    <li className='user' onClick={()=>{state.userTools.set(type.letter)}}>
      <img src={img} alt='' />
      <span className='userName'>Kamil Lewiński</span>
      <span className='userListButton'><ArrowForwardIosIcon /></span>
    </li>
  )
}

export default User
