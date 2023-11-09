import React, { useContext, useEffect, useState } from 'react'
import './components.scss'
import img from '../assets/kamil.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { StateContext } from './context/BoardState';
import { getAbsolutePhotoURL, santaUser } from '../databaseContext/DbContext';


const User = ({element} : {element: santaUser}) => {
  const state = useContext(StateContext);
  const type = state?.StatesUser;
  const [photoAURL, setPhotoAURL] = useState<string>('');
  useEffect(()=>{
    const fetchPhotoURL = async () => {
      const absoluteURL = await getAbsolutePhotoURL(element.photoURL);
      setPhotoAURL(absoluteURL);
    };

    fetchPhotoURL();
})
  return (
    <li className='user' onClick={()=>{
      state?.userTools.set(type?.letter as string)
      state?.userTools.setUserLetter(element)
    
    }}>
      <img src={photoAURL} alt='' />
      <span className='userName'>{element.name}</span>
      <span className='userListButton'><ArrowForwardIosIcon /></span>
    </li>
  )
}

export default User
