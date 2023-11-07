import React, { createContext, useState, ReactNode } from 'react';

enum StatesUser {
  initial = 'initial',
  letter = 'letter',
}

enum SantaLetter {
  noletter = 'noletter',
  letter = 'letter',
  letterEditor = 'letterEditor',
}

type UserTools = {
  state: string;
  set: (value: string) => void;
};

type LetterPageTools = {
  state: string;
  set: (value: string) => void;
};

type StateContextType = {
  StatesUser: typeof StatesUser;
  SantaLetter: typeof SantaLetter;
  userTools: UserTools;
  letterPageTools: LetterPageTools;
};

export const StateContext = createContext<StateContextType | undefined>(undefined);

const BoardState = ({children}: {children: ReactNode}) => {
  const [santaLetterState, setSantaLetterState] = useState(SantaLetter.noletter as string);
  const [userState, setUserState] = useState(StatesUser.initial as string);

  const values: StateContextType = {
    StatesUser,
    SantaLetter,
    userTools: {
      state: userState,
      set: (value: string) => setUserState(value),
    },
    letterPageTools: {
      state: santaLetterState,
      set: (value: string) => {setSantaLetterState(value)},
    },
  };

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export default BoardState;
