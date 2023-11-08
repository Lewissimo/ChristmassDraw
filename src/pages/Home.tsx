import React, { useContext, useEffect, useState } from 'react'
import SantaList from '../components/SantaList'
import MainBoard from '../components/MainBoard'
import UsersLists from '../components/UsersLists'
import BoardState from '../components/context/BoardState'
import HomeComp from './HomeComp'
import HomeMobile from './HomeMobile'
import { MobileContext } from '../MobileContext'
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
    <div className='home'>
        <BoardState >
          {
            MobileState?.isMobile?
            <HomeMobile />
            :
            <HomeComp />
          }
        </BoardState>
    </div>
  )
}

export default Home