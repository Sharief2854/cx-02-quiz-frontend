import React from 'react'
import { Outlet } from 'react-router-dom'
import NavLayout from '../../components/NavLayout'
function LandingPage() {
  return (
    <div>
        <NavLayout links={["Home", "Register", "Login"]} role=""/>
        <Outlet/>
    </div>
  )
}

export default LandingPage