import React, { useContext } from 'react'
import './components.scss'
import ChristmassListEditor from './ChristmassListEditor';
import BoardState, { StateContext } from './BoardState';
import EditIcon from '@mui/icons-material/Edit';
const SantaList = () => {
  const state = useContext(StateContext);
  const santaListText = 
`Drogi Święty Mikołaju! 

W tym roku marzy mi się:\n\n`;
  
  const types = state.santaLetter;
  return (
    <div className='santaListCreator'>
      {state.letterPageTools.state ===  types.letterEditor ? 
      <ChristmassListEditor />
      :
      santaListText === ''
       ? 
       <p className='writeListButton' onClick={()=>{state.letterPageTools.set(types.letterEditor)}}>Napisz list do Świętego Mikołaja</p>
        : 
        <div className='letter' onClick={()=>{state.letterPageTools.set(types.letterEditor)}}><pre>{santaListText}</pre><div className='EditButton'><EditIcon /></div></div>
      }
    </div>
  )
}

export default SantaList
