import React, { useContext, useEffect, useState } from 'react'
import HomeComp from './HomeComp'
import HomeMobile from './HomeMobile'
import { MobileContext } from '../context/MobileContext'
import UsersDatabaseContextProvider from '../context/usersDatabaseContext/UserDBContext'
const Home = () => {
  const MobileState = useContext(MobileContext);



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