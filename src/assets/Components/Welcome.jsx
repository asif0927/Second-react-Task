import React from 'react'
import Logout from './Logout'

function Welcome({user}) {
  return (
    <div>
      <div className='welcome'>Welcome {user.username.toUpperCase()}</div>
      <Logout></Logout>
    </div>
  )
}

export default Welcome
