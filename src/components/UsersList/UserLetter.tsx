import React, { useContext, useEffect, useState } from 'react'
import { getAbsolutePhotoURL } from '../../context/functions'
import { ManageContentContext } from '../../context/elementsOnBoardContext/ElementsOnBoardContext';
const UserLetter = () => {
  const [letter, setLetter] = useState<string>('');
  const state = useContext(ManageContentContext);
  const user = state?.user;
  
  
  useEffect(()=>{
    const userLetter = user?.letter;
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    if(userLetter){
      setLetter(userLetter?.replace(urlRegex, (url)=>{
        return `<a class='textLink' href="${url}" target="_blank">Link</a>`;
      }))
      console.log(letter);
    }

  }, [user])
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
          <pre dangerouslySetInnerHTML={{ __html: letter }} />
        </div>
       :
       <div className='letterContent'>Ten użytkonik nie ma jeszcze listu</div> 
      
       }
    </div>
  )
}

export default UserLetter