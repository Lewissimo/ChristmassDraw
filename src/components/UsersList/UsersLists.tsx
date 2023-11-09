import React, { useContext } from 'react'
import User from './User'
import '../../stylesApp/components.scss'
import UserLetter from './UserLetter'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { StateContext } from '../../context/homeVaulesContext/BoardState';
import { DBContext } from '../../context/databaseContext/DbContext';

const UsersLists = () => {
  const state = useContext(StateContext);
  const dbData = useContext(DBContext);

  const types = state?.StatesUser;
  return (
    <div className='usersList mainCard'>


      {
        state?.userTools.state === types?.initial 
        ?




        <>
        <h3>Użytkownicy</h3>
        <ul>
            {dbData?.usersTab.map((element, index)=>{
              return <User element={element}/>
            })}
        </ul> 
        </>
        :
        <div className='userLetterWrapper'>
          <span className='userLetterButton' onClick={()=>{state?.userTools.set(types?.initial as string)}}><ArrowBackIosNewIcon /></span>
          <UserLetter />
        </div>
        } 
    </div>
  )
}

export default UsersLists
