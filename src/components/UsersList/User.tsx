import React, { useContext, useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getAbsolutePhotoURL } from '../../context/functions';
import { userData } from '../../context/usersDatabaseContext/actions';
import { ManageContentContext } from '../../context/elementsOnBoardContext/ElementsOnBoardContext';
import { manageMainContentEnum } from '../../context/elementsOnBoardContext/actions';


const User = ({element} : {element: userData}) => {


  const state = useContext(ManageContentContext);
 
  
  const [photoAURL, setPhotoAURL] = useState<string>('');
  useEffect(()=>{
    const fetchPhotoURL = async () => {
      const absoluteURL = await getAbsolutePhotoURL(element.photoURL);
      setPhotoAURL(absoluteURL);
    };

    fetchPhotoURL();
},[]);
  return (
    <li className='user' onClick={()=>{
      state?.setState(manageMainContentEnum.USER_LETTER);
      state?.setUser(element);
    
    }}>
      <img src={photoAURL} alt='' />
      <span className='userName'>{element.name}</span>
      <span className='userListButton'><ArrowForwardIosIcon /></span>
    </li>
  )
}

export default User
