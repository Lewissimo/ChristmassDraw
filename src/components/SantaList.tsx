import React, { useContext } from 'react'
import './components.scss'
import ChristmassListEditor from './ChristmassListEditor';
import BoardState, { StateContext } from './context/BoardState';
import EditIcon from '@mui/icons-material/Edit';
import { DBContext } from '../databaseContext/DbContext';
const SantaList = () => {
  const state = useContext(StateContext);
  const dbData = useContext(DBContext);

  const santaListText = dbData?.current_user.letter;
  


  const types = state?.SantaLetter;
  return (
    <div className='santaListCreator mainCard'>
      {state?.letterPageTools.state ===  types?.letterEditor ? 
      (<ChristmassListEditor />)
      :
      
      santaListText === ''
       ? 
       <p className='writeListButton' onClick={()=>{state?.letterPageTools.set(types?.letterEditor as string)}}>Napisz list do Świętego Mikołaja</p>
        : 
        <div className='letter' onClick={()=>{state?.letterPageTools.set(types?.letterEditor as string)}}><pre>{santaListText}</pre><div className='EditButton'><EditIcon /></div></div>
      }
      
    </div>
  )
}

export default SantaList
