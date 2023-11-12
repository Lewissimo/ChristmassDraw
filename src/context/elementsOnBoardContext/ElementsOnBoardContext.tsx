import React, { ReactNode, createContext, useReducer } from 'react'
import { manageMainContentEnum, set_state, set_user } from './actions';
import { elementsOnBoardReducer, initialState } from './elementsOnBoardReducer';
import { userData } from '../usersDatabaseContext/actions';


type ManageContextType = {
    usersList: manageMainContentEnum;
    letterCreator: manageMainContentEnum;
    user: userData;
    setState: (state: manageMainContentEnum ) => void;
    setUser: (state: userData) => void
}



export const ManageContentContext = createContext<ManageContextType | undefined>(undefined);

const ManageContentContextProvider = ({children} : {children : ReactNode}) => {
    const [state, dispatch] = useReducer(elementsOnBoardReducer, initialState);
    const setState = (value: manageMainContentEnum) => {
      console.log(value);
      dispatch(set_state(value));
    };

    const setUser = (value: userData) => {
      dispatch(set_user(value));
    }

    const value: ManageContextType = {
        usersList: state.usersList,
        letterCreator: state.letterCreator,
        user: state.user,
        setState,
        setUser
    };
  return (
    <ManageContentContext.Provider value={value}>
        { children }
    </ManageContentContext.Provider>
  )
}

export default ManageContentContextProvider;