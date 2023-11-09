import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { StateContext } from '../../context/homeVaulesContext/BoardState';
import { DBContext, getAbsolutePhotoURL, SantaUser } from '../../context/databaseContext/DbContext';

const YourPerson = () => {
  const state = useContext(StateContext);
  const dbData = useContext(DBContext);
  const [person, setPerson] = useState<SantaUser | null>(null);
  useEffect(() => {

    dbData?.usersTab.map(async (element)=>{
      if(element.id === dbData.current_user.person){
        const photoURL = await getAbsolutePhotoURL(element.photoURL); 
        setPerson({
          id: element.id,
          photoURL,
          letter: element.letter,
          person: '',
          name: element.name
          
        })
      }
    })
   
  }, [dbData]);



  const types = state?.StatesUser; 

  return (
    <div className='yourPerson' onClick={() => { state?.userTools.set(types?.letter as string) }}>
      <div className='cardContainer'>
        <div className='card'>
          <div className='front'>
            <img src={person?.photoURL} alt='' />
            <span className='name'>{person?.name || 'No person selected'}</span>
          </div>
          <div className='back'>
            <FontAwesomeIcon icon={faGifts} beat size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourPerson;
