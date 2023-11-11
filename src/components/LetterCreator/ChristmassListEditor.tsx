import React, { useContext, useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { UserDataContext } from '../../context/usersDatabaseContext/UsersDatabaseContext';
import { manageMainContentEnum } from '../../context/elementsOnBoardContext/actions';
import { ManageContentContext } from '../../context/elementsOnBoardContext/ElementsOnBoardContext';
const ChristmassListEditor = () => {
    const state = useContext(ManageContentContext);
    const types = state;
    const dbData = useContext(UserDataContext);
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
        <span className='back'  onClick={()=>{state?.setState(manageMainContentEnum.CURRENT_USER_HAS_LETTER)}}><ArrowBackIosNewIcon /></span>
        <textarea className='listTextArea' value={startText} onChange={(e)=>{setStartText(e.target.value)}}></textarea>
        <button className='updateListButton' onClick={async ()=>{

          await setUserLetter();
          state?.setState(manageMainContentEnum.CURRENT_USER_DOESNT_HAS_LETTER);  
          }}>Dodaj list</button>
    </div>
  )
}

export default ChristmassListEditor