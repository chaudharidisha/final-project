import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRouter from './components/ProtectedRouter'
import Logout from './pages/Logout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <ProtectedRouter>
            <Home/>
          </ProtectedRouter>
        } />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/logout' element={<Logout/>} />
      </Routes>

    </>
  )
}

export default App
