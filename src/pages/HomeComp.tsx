import React from 'react'
import MainBoard from '../components/MainBoard/MainBoard'
import SantaList from '../components/LetterCreator/SantaList'
import UsersLists from '../components/UsersList/UsersLists'

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