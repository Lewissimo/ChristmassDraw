import React, { useContext, useEffect, useState } from 'react'
import { getAbsolutePhotoURL } from '../../context/functions'
import { ManageContentContext } from '../../context/elementsOnBoardContext/ElementsOnBoardContext';
const UserLetter = () => {

  const state = useContext(ManageContentContext);
  const user = state?.user;
  const [photoAURL, setPhotoAURL] = useState<string>('');
  useEffect(()=>{
    const fetchPhotoURL = async () => {
      if(user){
        const absoluteURL = await getAbsolutePhotoURL(user.photoURL);
        setPhotoAURL(absoluteURL);
      }
    };

    fetchPhotoURL();
}, []);
  return (
    <div className='userLetter show'>
        <div className='signUserWrapper'>
            <img src={photoAURL} alt='' />   
            <span>{user?.name}</span>
        </div>
        {user?.letter !== '' ? 
        <div className='letterContent'>
            <pre>{user?.letter}</pre>
        </div>
       :
       <div className='letterContent'>Ten użytkonik nie ma jeszcze listu</div> 
      
       }
    </div>
  )
}

export default UserLetter