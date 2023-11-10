import React, { ReactNode, createContext } from 'react'
import { userData } from './reducerTypes';


type UserContextType = {
    current_user: userData;
    usersTab: userData[];
    setRefresh: () => void;
}

export const UserDataContext = createContext<UserContextType | undefined>(undefined);

const UsersDatabaseContext = ({children}: {children: ReactNode}) => {
  return (
    <UserDataContext.Provider>usersDatabaseContext</UserDataContext.Provider>
  )
}

export default UsersDatabaseContext