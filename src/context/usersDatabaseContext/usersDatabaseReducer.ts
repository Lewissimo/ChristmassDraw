import { ADD_USER, GET_USER } from "./actions"
import { actionType, userData } from "./reducerTypes"


const initialState: userData[] = [];


export const usersDatabaseReducer = (state: userData[], action: actionType) => {
    switch(action.type){
        case ADD_USER:

            return [...state, action.payload];
        case GET_USER:
            const currentUser = state.find(user => user.id === action.payload);

            return currentUser ? currentUser : null;
        default:
            console.log('something went wrong');
            return state
    }
}