import React, { ReactNode, createContext, useEffect, useState } from 'react'


export enum swiperState {
  mainBoard,
  letterSpace,
  users
}

type MobileContext = {
  isMobile: boolean,
  slidePosition: swiperState,
  setSlidePosition: (val: swiperState)=> void
}

export const MobileContext = createContext<MobileContext | undefined>(undefined);


const MobileContextApp = ({children}: {children: ReactNode}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [slidePosition, setSlidePosition] = useState(swiperState.mainBoard);
 

  

    window.onresize = ()=>{
      if(window.innerWidth < 850){
        setIsMobile(true);
      }
      else{
        setIsMobile(false);
      }
    }
    
    useEffect(()=>{
      if(window.innerWidth < 850){
        setIsMobile(true);
      }
      else{
        setIsMobile(false);
      }
    }, []); // tu mozesz dac [window.innerWidth] i usunac wyzej funkcje window.onresize, chyba powinno dzialac tak samo
    
  const value = {
    isMobile,
    slidePosition,
    setSlidePosition: (val: swiperState)=> setSlidePosition(val)
  }
  return (
    <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
  )
}

export default MobileContextApp;