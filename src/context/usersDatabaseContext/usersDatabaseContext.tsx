import React from 'react'
import { userData } from './reducerTypes';


type UserContextType = {
    current_user: userData;
    usersTab: userData[];
    setRefresh: () => void;
}




const usersDatabaseContext = () => {
  return (
    <div>usersDatabaseContext</div>
  )
}

export default usersDatabaseContext