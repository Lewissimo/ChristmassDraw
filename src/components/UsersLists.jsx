import React, { useContext } from 'react'
import User from './User'
import './components.scss'
import UserLetter from './UserLetter'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { StateContext } from './BoardState';

const UsersLists = () => {
  const state = useContext(StateContext);
  const types = state.statesUser;
  console.log(state.userTools.state)
  return (
    <div className='usersList'>


      {
        state.userTools.state === types.initial 
        ?




        <>
        <h3>Użytkownicy</h3>
        <ul>
            
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
        </ul> 
        </>
        :
        <div className='userLetterWrapper'>
          <span className='userLetterButton' onClick={()=>{state.userTools.set(types.initial)}}><ArrowBackIosNewIcon /></span>
          <UserLetter className='show'/>
        </div>
        } 
    </div>
  )
}

export default UsersLists
