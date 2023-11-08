import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { User as FirebaseUser, onAuthStateChanged, signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { auth } from '../firebase/firebase';

export enum loginReturnedStatesEnum{
  EVERYTHINGCORRECT,
  WRONGPASSWORDOFEMAIL,
  NOTVERIEFIEDUSER,
  OTHERPROBLEM
}



type AuthContextType = {
  user: FirebaseUser | null;
  signIn: (email: string, password: string) => Promise<loginReturnedStatesEnum | void>
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, user => setUser(user));
    
    return ()=> {
      unSub();
    }
  }, [])

  const signIn = async (email: string, password: string): Promise<loginReturnedStatesEnum | void> => {
    console.log(password);
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('isLogged', 'true');
      return loginReturnedStatesEnum.EVERYTHINGCORRECT;
    } catch (error) {
      if ((error as AuthError).code === "auth/invalid-login-credentials") {
        return loginReturnedStatesEnum.WRONGPASSWORDOFEMAIL;
      } else {
        return loginReturnedStatesEnum.OTHERPROBLEM;
      }
      console.log(error);
    }
  }
  

  const value = {
    user,
    signIn
  }

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export default AuthContext