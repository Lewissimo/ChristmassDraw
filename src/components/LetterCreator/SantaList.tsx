import React, { useContext } from 'react'
import '../../stylesApp/components.scss'
import ChristmassListEditor from './ChristmassListEditor';
import EditIcon from '@mui/icons-material/Edit';
import { ManageContentContext } from '../../context/elementsOnBoardContext/ElementsOnBoardContext';
import { UserDataContext } from '../../context/usersDatabaseContext/UserDBContext';
import { manageMainContentEnum } from '../../context/elementsOnBoardContext/actions';
const SantaList = () => {
  const state = useContext(ManageContentContext);
  const dbData = useContext(UserDataContext);
  
  const santaListText = dbData?.current_user.letter;
  


  return (
    <div className='santaListCreator mainCard'>
      {state?.letterCreator === manageMainContentEnum.LETTER_EDITOR ? 
      (<ChristmassListEditor />)
      :
      
      santaListText === ''
       ? 
       <p className='writeListButton' onClick={()=>{state?.setState(manageMainContentEnum.LETTER_EDITOR)}}>Napisz list do Świętego Mikołaja</p>
        : 
        <div className='letter' onClick={()=>{state?.setState(manageMainContentEnum.LETTER_EDITOR)}}><pre>{santaListText}</pre><div className='EditButton'><EditIcon /></div></div>
      }
      
    </div>
  )
}

export default SantaList
