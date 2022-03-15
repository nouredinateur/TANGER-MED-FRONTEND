import React, { useEffect } from 'react'
import { Outlet } from 'react-router';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';
import {Route} from "react-router-dom"
import { useAuthContext } from '../../components/tools/Context/useAuth'

const ProtectedRoute = ({children,...props}) => {
    const {user,setUser}= useAuthContext();
   
    // console.log(user);
  
  return (
      <>
    {
       user==undefined|| user  && <Outlet />  || <Navigate to={"/login"} />
    } 
      </>
   
    
  )
}

export default ProtectedRoute
