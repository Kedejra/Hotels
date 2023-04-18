import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import {useAuth} from './AuthProvider'

function ProtectedRoutes({children}) {
    const loginInfo = useAuth()
    console.log("Login Info in ProtectedRoutes:",loginInfo)
    return (
       
           loginInfo.currentUser ?  <Outlet />  : <Navigate to="/login"/>
         //loginInfo.currentUser ?  <Navigate to="/admin/dashboard/hotels" />  : <Navigate to="/login"/>
          
        
    )
}

export default ProtectedRoutes
