import React, { useContext, useEffect, useState } from 'react'
import User from './User'
import '../../stylesApp/components.scss'
import UserLetter from './UserLetter'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { UserDataContext } from '../../context/usersDatabaseContext/UserDBContext';
import { ManageContentContext } from '../../context/elementsOnBoardContext/ElementsOnBoardContext';
import { manageMainContentEnum } from '../../context/elementsOnBoardContext/actions';

const UsersLists = () => {
  const state = useContext(ManageContentContext);
  const usersData = useContext(UserDataContext);

  console.log(state);
  const [content, setContent] = useState<any>();
  

  useEffect(()=>{
    console.log(state);
    if (state?.usersList === manageMainContentEnum.USER_LIST) {
      setContent(
        <>
          <h3>Użytkownicy</h3>
          <ul>
            {usersData?.usersTab.map((element, index) => (
              <User element={element} key={index} />
            ))}
          </ul>
        </>
      );
    } else if (state?.usersList === manageMainContentEnum.USER_LETTER) {
      setContent(
        <div className='userLetterWrapper'>
          <span className='userLetterButton' onClick={() => state.setState(manageMainContentEnum.USER_LIST)}>
            <ArrowBackIosNewIcon />
          </span>
          <UserLetter />
        </div>
      );
    }
  }, [state, usersData]);

  return (
    <div className='usersList mainCard'>
      {content} 
    </div>
  )
}

export default UsersLists
