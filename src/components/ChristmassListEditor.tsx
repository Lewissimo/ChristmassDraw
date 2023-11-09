import React, { useContext, useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { StateContext} from './context/BoardState';
import { DBContext } from '../databaseContext/DbContext';
import { collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
const ChristmassListEditor = () => {
    const state = useContext(StateContext);
    const types = state?.SantaLetter;
    const dbData = useContext(DBContext);
    const [startText, setStartText] = useState('');
    
    const setUserLetter = async () => {

      if(dbData){
        const colRef = await doc(db, 'users', dbData.current_user.id);
        updateDoc(colRef, {
          letter: startText
        })
      }
    }

    useEffect(()=>{
      if(dbData?.current_user.letter === ''){
        setStartText(`Drogi Święty Mikołaju!\n\nW tym roku marzy mi się:\n\n`);
      }
      else{
        if(dbData){
          setStartText(dbData.current_user.letter);
        }
      }
    },[]);
  return (
    <div className='listEditor show'>
        <span className='back'  onClick={()=>{state?.letterPageTools.set(types?.noletter as string)}}><ArrowBackIosNewIcon /></span>
        <textarea className='listTextArea' value={startText} onChange={(e)=>{setStartText(e.target.value)}}></textarea>
        <button className='updateListButton' onClick={async ()=>{

          await setUserLetter();
          state?.letterPageTools.set(types?.noletter as string);  
          }}>Dodaj list</button>
    </div>
  )
}

export default ChristmassListEditor