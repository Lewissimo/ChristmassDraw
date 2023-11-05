import React, { createContext, useReducer, useState } from 'react'


export const StateContext = createContext();

const BoardState = ({children}) => {

    const statesUser = {
        initial: 'initial',
        letter: 'letter'
    }
    
    const santaLetter = {
        noletter: 'noletter',
        letter: 'letter',
        letterEditor: 'letterEditor'
    }

    const [santaLetterState, setSantaLetterState] = useState(santaLetter.noletter);
    const [userState, setUserState] = useState(statesUser.initial);

    const values = {
        statesUser,
        santaLetter,
        userTools: {
            state: userState,
            set: value => setUserState(value)
        },
        letterPageTools: {
            state: santaLetterState,
            set: value => setSantaLetterState(value)
        }
    }

    return (
        <StateContext.Provider value={values}>{children}</StateContext.Provider>
    )
}

export default BoardState