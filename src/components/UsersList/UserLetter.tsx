import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../context/homeVaulesContext/BoardState'
import { getAbsolutePhotoURL } from '../../context/functions'
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