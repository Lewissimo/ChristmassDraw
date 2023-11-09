import { ADD_USER, GET_USER } from "./actions";

export type userData = {
    id: string;
    name: string;
    photoURL: string;
    letter: string;
    person: string;
}

export type actionType = {
    type: typeof ADD_USER | typeof GET_USER;
    payload: userData | string
}