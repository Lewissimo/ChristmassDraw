import React from 'react'
import MainBoard from '../components/MainBoard'
import SantaList from '../components/SantaList'
import UsersLists from '../components/UsersLists'
import '../App.scss';

const HomeComp = () => {
  return (
    <div className='homeContent'>

            <MainBoard />
            <SantaList />
            <UsersLists />
    </div>
  )
}

export default HomeComp