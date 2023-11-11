import React, { useContext, useEffect, useState } from 'react'
import SantaList from '../components/LetterCreator/SantaList'
import MainBoard from '../components/MainBoard/MainBoard'
import UsersLists from '../components/UsersList/UsersLists'
import HomeComp from './HomeComp'
import HomeMobile from './HomeMobile'
import { MobileContext } from '../context/MobileContext'
import UsersDatabaseContextProvider from '../context/usersDatabaseContext/UsersDatabaseContext'
const Home = () => {
  const MobileState = useContext(MobileContext);
  const [mobile, setMobile] = useState(false);
  useEffect(()=>{
    if(MobileState?.isMobile){
      setMobile(true)
    }
    else{
      setMobile(false);
    }
  })
  console.log(MobileState?.isMobile);
  return (
    <UsersDatabaseContextProvider>
    <div className='home'>
          {
            MobileState?.isMobile?
            <HomeMobile />
            :
            <HomeComp />
          }
    </div>
    </UsersDatabaseContextProvider>
  )
}

export default Home