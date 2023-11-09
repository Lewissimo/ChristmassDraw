import React, { useContext, useState, useEffect } from 'react';
import img from '../assets/kamil.jpg';
import './components.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { StateContext } from './context/BoardState';
import { DBContext, getAbsolutePhotoURL, santaUser } from '../databaseContext/DbContext';

const YourPerson = () => {
  const state = useContext(StateContext);
  const dbData = useContext(DBContext);
  const [person, setPerson] = useState<santaUser | null>(null);
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
            <img src={person?.photoURL || img} alt='' />
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
