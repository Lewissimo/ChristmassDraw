import React, { ReactNode, createContext, useReducer } from 'react'
import { SET_LETTER, SET_STATE, manageMainContentEnum } from './actions';
import { elementsOnBoardReducer, initialState } from './elementsOnBoardReducer';
import { Value } from 'sass';
import { userData } from '../usersDatabaseContext/actions';


type ManageContextType = {
    usersList: manageMainContentEnum;
    letterCreator: manageMainContentEnum;
    user: userData;
    setState: (state: manageMainContentEnum | userData) => void
}
const setContextState = (dispatch: React.Dispatch<any>, value: manageMainContentEnum | userData) => {
    const decType = typeof value as string;
  
    (decType === 'userData')
    ?
    dispatch({ type: SET_STATE, payload: value })
    :
    dispatch({type: SET_LETTER, payload: value});
  };



export const ManageContentContext = createContext<ManageContextType | undefined>(undefined);

const ManageContentContextProvider = ({children} : {children : ReactNode}) => {
    const [state, dispatch] = useReducer(elementsOnBoardReducer, initialState);
    const setState = (value: manageMainContentEnum | userData) => {
        setContextState(dispatch, value);
      };

    const value: ManageContextType = {
        usersList: state.usersList,
        letterCreator: state.letterCreator,
        user: state.user,
        setState,
    };
  return (
    <ManageContentContext.Provider value={value}>
        { children }
    </ManageContentContext.Provider>
  )
}

export default ManageContentContextProvider;