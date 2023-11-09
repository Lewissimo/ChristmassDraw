import React, { createContext, useReducer } from 'react'



export const IsLoggedContext = createContext();

const isLogged 

const isLoggedReducer = (state, action){
    switch(action.type){
        case "FIRST_LOG":
            return 
        case "LOGGED_IN":
            return
        case "UNLOGGED":
            return
    }
}

const IsLogged = ({chilndren}) => {
    const [state, dispatch] = useReducer(isLoggedReducer, )



    const value = {

    }
  return (
    <IsLoggedContext.Provider value={value}>
        {children}
    </IsLoggedContext.Provider>
  )
}

export default IsLogged