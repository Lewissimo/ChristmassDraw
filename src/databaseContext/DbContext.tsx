import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { storage } from '../firebase/firebase';
import AuthContext from '../authContext/AuthContext';
import { getDownloadURL, ref } from 'firebase/storage';

export type santaUser = {
    id:string,
    name: string,
    photoURL: string,
    letter: string,
    person: string
}

type dbContextType = {
    current_user: santaUser,
    usersTab: santaUser[],
    setRefresh: ()=>void
}

export const getAbsolutePhotoURL = async (url: string): Promise<string> => {
    const storageRef = ref(storage, url);
    try {
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error("Błąd podczas pobierania URL z Firebase Storage:", error);
      throw error; // Rzuć błąd, aby obsłużyć go w miejscu wywołania
    }
  };

const getUsersData = async () => {
    const usersCollection = await collection(db, "users");

    const dbContext = {
        current_user: {
            id: 'unset',
            name: 'unset',
            photoURL: 'unset',
            letter: 'unset',
            person: 'unset'
        },
        usersTab: []
        
    }
    await getDocs(usersCollection).then((query) => {
        query.forEach((doc)=>{
    
            
            if(auth.currentUser?.uid === doc.id){
                dbContext.current_user.id = doc.id;
                dbContext.current_user.name = doc.data().name;
                dbContext.current_user.photoURL = doc.data().photoURL;
                dbContext.current_user.letter = doc.data().letter;
                dbContext.current_user.person = doc.data().person;
            }else{
                dbContext.usersTab.push({
                    id: doc.id,
                    name: doc.data().name,
                    photoURL: doc.data().photoURL,
                    letter: doc.data().letter,
                    person: ''
                })
            }
        }
    )});

    return dbContext;
}

export const DBContext = createContext<dbContextType | undefined>(undefined); 

const DbContextProvider = ({children}: {children: ReactNode}) => {
    const auth = useContext(AuthContext);
    const [refresh, setRefresh] = useState(true);
    const [val, setVal] = useState<dbContextType | null>(null);

    useEffect(() => {
        getUsersData().then((res) => {
          setVal(res);
        });
      }, [refresh]); // Pusta tablica oznacza uruchomienie efektu tylko raz po zamontowaniu komponentu
      

    const value = {val, refresh: ()=>{setRefresh(prev=>!prev)}};


      
  return (
    <DBContext.Provider value={value}>{children}</DBContext.Provider>
  )
}

export default DbContextProvider;