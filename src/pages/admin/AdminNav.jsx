import React from 'react'
import NavLayout from '../../components/NavLayout'
function AdminNav() {
  return (
    <NavLayout links={["Home","Trainers","Students","Logout"]} role="admin"/>
    
  )
}

export default AdminNav