import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { storage } from '../../firebase/firebase';
import AuthContext from '../authContext/AuthContext';
import { getDownloadURL, ref } from 'firebase/storage';

export type SantaUser = {
  id: string;
  name: string;
  photoURL: string;
  letter: string;
  person: string;
};

type DbContextType = {
  current_user: SantaUser;
  usersTab: SantaUser[];
  setRefresh: () => void;
};



export const DBContext = createContext<DbContextType | undefined>(undefined);

const DbContextProvider = ({ children }: { children: ReactNode }) => {
  const auth = useContext(AuthContext);

  const getUsersData = async (): Promise<DbContextType> => {
    const usersCollection = collection(db, 'users');

    const dbContext: DbContextType = {
      current_user: {
        id: 'unset',
        name: 'unset',
        photoURL: 'unset',
        letter: 'unset',
        person: 'unset',
      },
      usersTab: [],
      setRefresh: () => {
        console.log('refresh');
        setRefresh((prev) => !prev);
      },
    };

    const querySnapshot = await getDocs(usersCollection);

    querySnapshot.forEach((doc) => {
      if (auth?.user?.uid === doc.id) {
        dbContext.current_user = {
          id: doc.id,
          name: doc.data().name,
          photoURL: doc.data().photoURL,
          letter: doc.data().letter,
          person: doc.data().person,
        };
      } else {
        dbContext.usersTab.push({
          id: doc.id,
          name: doc.data().name,
          photoURL: doc.data().photoURL,
          letter: doc.data().letter,
          person: '',
        });
      }
    });

    return dbContext;
  };

  const [refresh, setRefresh] = useState(true);
  const [value, setValue] = useState<DbContextType | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUsersData() as DbContextType;
      setValue({
        current_user: res.current_user,
        usersTab: res.usersTab,
        setRefresh: ()=>{setRefresh(prev => !prev)}
      });
    };

    fetchData();
  }, [refresh, auth]);

  console.log(value);

  return <DBContext.Provider value={value}>{children}</DBContext.Provider>;
};

export default DbContextProvider;
