import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Navigate, Route, } from "react-router-dom";
import logo from './logo.svg'
import './App.css'
import { Routes } from 'react-router-dom'

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

export type User = {
  id: number
  email: string
  password: string
}

function App() {
  const [user, setUser] = useState<null | User>(null)
  function signin(user: User) {
    setUser(user)
   
  }
  function signout() {
    setUser(null)
  }
  



  return (
    <>
      <Routes>

        <Route path='/home' element={Home()} />
       
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register signin={signin} />} />
      


      </Routes>
    </>
  )
}

export default App
