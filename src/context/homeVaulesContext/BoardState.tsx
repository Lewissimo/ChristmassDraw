import React, { createContext, useState, ReactNode } from 'react';
import { SantaUser } from '../databaseContext/DbContext';

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
  user: SantaUser | null;
  set: (value: string) => void;
  setUserLetter: (value: SantaUser) => void;
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
  const [letterString, setLetterString] = useState<SantaUser | null>(null);

  const values: StateContextType = {
    StatesUser,
    SantaLetter,
    userTools: {
      state: userState,
      user: letterString,
      set: (value: string) => setUserState(value),
      setUserLetter: (value: SantaUser) => setLetterString(value)
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
