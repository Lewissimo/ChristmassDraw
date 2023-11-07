import React, { useContext } from 'react'
import './components.scss'
import img from '../assets/kamil.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { StateContext } from './context/BoardState';


const User = () => {
  const state = useContext(StateContext);
  const type = state?.StatesUser;
  return (
    <li className='user' onClick={()=>{state?.userTools.set(type?.letter as string)}}>
      <img src={img} alt='' />
      <span className='userName'>Kamil Lewiński</span>
      <span className='userListButton'><ArrowForwardIosIcon /></span>
    </li>
  )
}

export default User
