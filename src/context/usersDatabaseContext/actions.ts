import { type } from "os";

export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';


interface Add_User{
    type: typeof ADD_USER;
    payload: userData;
}

export const add_user = (userData: userData): Add_User => ({
    type: ADD_USER,
    payload: userData
})

export type userData = {
    id: string;
    name: string;
    photoURL: string;
    letter: string;
    person: string;
}

export type actionType = {
    type: typeof ADD_USER;
    payload: userData
}