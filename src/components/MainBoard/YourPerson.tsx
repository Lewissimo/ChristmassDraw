import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { getAbsolutePhotoURL } from '../../context/functions';
import { ManageContentContext } from '../../context/elementsOnBoardContext/ElementsOnBoardContext';
import { UserDataContext } from '../../context/usersDatabaseContext/UsersDatabaseContext';
import { userData } from '../../context/usersDatabaseContext/actions';
import { manageMainContentEnum } from '../../context/elementsOnBoardContext/actions';


const YourPerson = () => {
  const state = useContext(ManageContentContext);
  const dbData = useContext(UserDataContext);
  const [person, setPerson] = useState<userData | null>(null);
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




  return (
<>    
    <div className='yourPerson' onClick={async () => { 
     await state?.setState(person as userData);
      state?.setState(manageMainContentEnum.USER_LETTER);
      
      }}>
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
    </>
  );
};

export default YourPerson;
