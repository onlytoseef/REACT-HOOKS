import React from 'react'
import { Route, Routes } from 'react-router-dom'


// pages
import Login from './Login'
import Register from './Register'
import Forgot from './Forgot'

// Routing

export default function Index() {
  return (
    <Routes>

   <Route path='/login' element={<Login />} />
   <Route path='/register' element={<Register />} />
   <Route path='/forgot' element={<Forgot />} />
   <Route path='*'  element={ "<h1>404<h1/>" } />

   

    </Routes>
  )
}
