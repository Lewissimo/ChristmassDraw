import React, { useContext, useEffect, useState } from 'react'
import User from './User'
import img from '../assets/kamil.jpg'
import './components.scss'
import { StateContext } from './context/BoardState'
import { getAbsolutePhotoURL } from '../databaseContext/DbContext'
const UserLetter = () => {

  const state = useContext(StateContext);
  const user = state?.userTools.user;
  const [photoAURL, setPhotoAURL] = useState<string>('');
  useEffect(()=>{
    const fetchPhotoURL = async () => {
      if(user){
        const absoluteURL = await getAbsolutePhotoURL(user.photoURL);
        setPhotoAURL(absoluteURL);
      }
    };

    fetchPhotoURL();
})
  return (
    <div className='userLetter show'>
        <div className='signUserWrapper'>
            <img src={photoAURL} alt='' />   
            <span>{user?.name}</span>
        </div>
        <div className='letterContent'>
            <pre>{user?.letter}</pre>
        </div>
    </div>
  )
}

export default UserLetter