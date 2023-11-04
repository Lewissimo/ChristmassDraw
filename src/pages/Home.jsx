import React from 'react'
import SantaList from '../components/SantaList'
import MainBoard from '../components/MainBoard'
import UsersLists from '../components/UsersLists'

const Home = () => {
  return (
    <div className='homeContent'>
      <MainBoard />
      <SantaList />
      <UsersLists />
    </div>
  )
}

export default Home