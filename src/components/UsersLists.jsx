import React from 'react'
import User from './User'
import './components.scss'

const UsersLists = () => {
  return (
    <div className='usersList'>

        <ul>
            <li>Użytkownicy:</li>
            <User />
            <User />
            <User />
        </ul>
    </div>
  )
}

export default UsersLists
