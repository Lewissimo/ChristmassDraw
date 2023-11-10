import { ADD_USER } from "./actions"
import { actionType, userData } from "./reducerTypes"

export const initialState = [] as userData[]

export const usersDatabaseReducer: React.Reducer<userData[], actionType> = (state: userData[], action: actionType) => {
    
    switch(action.type){
        case ADD_USER:
            return [...state, action.payload];
        default:
            console.log('something went wrong');
            return state
    }
}