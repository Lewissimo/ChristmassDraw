import { userData } from "../usersDatabaseContext/actions";

export const SET_STATE = 'SET_STATE';
export const SET_LETTER = 'SET_LETTER';


export interface Set_State{
    type: typeof SET_STATE;
    payload: manageMainContentEnum
}


export interface Set_Letter{
    type: typeof SET_LETTER;
    payload: userData;
}

const set_state = (value: manageMainContentEnum): Set_State => ({
    type: SET_STATE,
    payload: value
})

const set_letter = (value: userData): Set_Letter => ({
    type: SET_LETTER,
    payload: value
})

export enum manageMainContentEnum{
    CURRENT_USER_HAS_LETTER,
    CURRENT_USER_DOESNT_HAS_LETTER,
    LETTER_EDITOR,
    USER_LIST,
    USER_LETTER
}

export type ManageContextTypeState = {
    usersList: manageMainContentEnum;
    letterCreator: manageMainContentEnum;
    user: userData;
}

export type ActionType = {
    type: string;
    payload: userData | manageMainContentEnum;
}




