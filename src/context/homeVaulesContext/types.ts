export type StatesUser = {
    initial: string;
    letter: string;
  };
  
export type SantaLetter = {
    noletter: string;
    letter: string;
    letterEditor: string;
  };
  
  type UserTools = {
    state: string;
    set: (value: string) => void;
  };
  
  type LetterPageTools = {
    state: string;
    set: (value: string) => void;
  };
  
  export type StateContextType = {
    statesUser: StatesUser;
    santaLetter: SantaLetter;
    userTools: UserTools;
    letterPageTools: LetterPageTools;
  };