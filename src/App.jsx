import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/common/LandingPage'
import Home from './pages/common/Home'
import Login from './pages/common/Login'
import Register from './pages/common/Register'
import './App.css'
import AdminHome from './pages/admin/AdminHome'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminTrainers from './pages/admin/AdminTrainers'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}>
                <Route index element={<Home/>}/>
                <Route path='/home' element={<Home />} />

                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Route>
            <Route path='/admin' element={
              <Provider store={store}>
                <AdminDashboard/>
              </Provider>
              

            }>
                <Route index element={<AdminHome/>}/>
                <Route path="/admin/home" element={<AdminHome />} />
                <Route path="/admin/trainers" element={<AdminTrainers />} />


            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App