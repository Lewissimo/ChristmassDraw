import { type } from "os";
import { userData } from "./reducerTypes";

export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';


interface Add_User{
    type: typeof ADD_USER;
    payload: userData;
}

interface Get_User{
    type: typeof GET_USER;
    payload: string;
}




export const add_user = (userData: userData): Add_User => ({
    type: ADD_USER,
    payload: userData
})

export const get_user = (userId: string): Get_User => ({
    type: GET_USER,
    payload: userId
})