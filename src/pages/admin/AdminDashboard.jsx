import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from './AdminNav'
function AdminDashboard() {
  return (
    <div>
        <AdminNav/>
        <Outlet/>
    </div>
  )
}

export default AdminDashboard