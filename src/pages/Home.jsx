import React from 'react'
import SantaList from '../components/SantaList'
import MainBoard from '../components/MainBoard'
import UsersLists from '../components/UsersLists'
import BoardState from '../components/BoardState'
import HomeComp from './HomeComp'
import HomeMobile from './HomeMobile'
const Home = () => {
  return (
    <div className='home'>
        <BoardState >
            <HomeMobile />
        </BoardState>
    </div>
  )
}

export default Home