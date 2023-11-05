import React, { useContext } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { StateContext } from './BoardState';
const ChristmassListEditor = () => {
    const state = useContext(StateContext);
    const types = state.santaLetter;

    const startText = `Drogi Święty Mikołaju!\n\nW tym roku marzy mi się:\n\n`;
  return (
    <div className='listEditor show'>
        <span className='back'  onClick={()=>{state.letterPageTools.set(types.noletter)}}><ArrowBackIosNewIcon /></span>
        <textarea className='listTextArea'>{startText}</textarea>
        <button className='updateListButton' onClick={()=>{state.letterPageTools.set(types.noletter)}}>Dodaj list</button>
    </div>
  )
}

export default ChristmassListEditor