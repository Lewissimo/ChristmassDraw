  import React, { ReactNode, createContext, useContext, useEffect, useReducer, useState } from 'react'
  import { userData } from './reducerTypes';
  import AuthContext from '../authContext/AuthContext';
  import { collection, onSnapshot } from 'firebase/firestore';
  import { db } from '../../firebase/firebase';
  import { initialState, usersDatabaseReducer } from './usersDatabaseReducer';
import { add_user } from './actions';


  type UserContextType = {
      current_user: userData;
      usersTab: userData[];
  }





  export const UserDataContext = createContext<UserContextType | undefined>(undefined);

  const UsersDatabaseContextProvider = ({children}: {children: ReactNode}) => {
    const auth = useContext(AuthContext);

    const [state, dispatch] = useReducer(usersDatabaseReducer, initialState);
    const [value, setValue] = useState<UserContextType | undefined>(undefined);

    const getUsersData = async () =>{
      const collectionUsers = collection(db, 'users');
      
      const getData = onSnapshot(collectionUsers, snapshot=>{
        const allUsersTab = snapshot.docs.map(doc => {
          
          const user = {
            id: doc.id,
            letter: doc.data().letter,
            name: doc.data().name,
            person: doc.data().person,
            photoURL: doc.data().photoURL
          }
          
          dispatch(add_user(user));
          return user;        
        })
        
      })  
    }

    const getValueObject = ()=>{
      const usersTab = state.filter( user => user.id !== auth?.user?.uid);
      const current_user = state.find(user => user.id === auth?.user?.uid);
      if(current_user){
        setValue({
          usersTab,
          current_user
        }) 
      }
    }

    useEffect(()=>{
      const fetchData = async ()=>{
        await getUsersData();
        await getValueObject();
      }
      fetchData()
    })



    
    return (
      <UserDataContext.Provider value={value}>usersDatabaseContext</UserDataContext.Provider>
    )
  }

  export default UsersDatabaseContextProvider