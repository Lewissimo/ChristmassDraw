import React, { useContext, useEffect, useState } from 'react'
import SantaList from '../components/LetterCreator/SantaList'
import MainBoard from '../components/MainBoard/MainBoard'
import UsersLists from '../components/UsersList/UsersLists'
import BoardState from '../context/homeVaulesContext/BoardState'
import HomeComp from './HomeComp'
import HomeMobile from './HomeMobile'
import { MobileContext } from '../context/MobileContext'
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