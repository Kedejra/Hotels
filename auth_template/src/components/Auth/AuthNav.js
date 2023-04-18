import React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from './AuthProvider'
import UserInfo from './UserInfo'

function AuthNav() {
    const loginInfo = useAuth()
  
  return (

    <div className="authnav-outer">
        {(loginInfo.currentUser)?<Link className='authnav-inner' to="/logout"> Logout </Link>:<Link className='authnav-inner' to="/login"> Login </Link>}
        {(loginInfo.currentUser)?null:<Link className='authnav-inner' to="/signup"> Sign Up for Free </Link>}
        <UserInfo/>
      
    </div>
  )
}

export default AuthNav


